import { useEffect, useState } from "react";
import { ContainerLoader, NoContent } from "../../../components/common";
import NoProjects from "../../../assets/img/no-projects.png";
import ScrollContainer from "react-indiana-drag-scroll";
import { getAllProjects } from "../../../services/http-services/projects";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { slice as projectSlice } from "../../../store/slices/projects";
import { useDispatch, useSelector } from "react-redux";
import { AppRefreshButton } from "../../../components/common";

const SupervisorProjects = () => {
  const { allProjects } = useSelector((state) => state.projects);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (allProjects.length == 0) getProjects();
  }, []);

  const getProjects = () => {
    setLoading(true);
    getAllProjects({
      cbSuccess: ({ projects }) => {
        dispatch(projectSlice.actions.setProjects(projects));
        // setList(projects);
        setLoading(false);
      },
      cbFailure: (error) => {
        toast.error(error);
        setLoading(false);
      },
    });
  };

  if (loading) return <ContainerLoader />;
  return (
    <div className='flex flex-col sm:-mx-6 lg:-mx-8'>
      <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
        {allProjects?.length > 0 ? (
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 p-0 m-0 w-full items-center'>
            {allProjects?.map((project) => (
              <div className='col-span-1 my-2 relative card' key={project._id}>
                <div className='flex flex-wrap m-0 p-2 justify-between items-center card-header'>
                  <h5 className='font-light p-0 m-0'>{project.name}</h5>
                  <span
                    className={`${
                      project.isCompleted ? "badge-success" : "badge-danger"
                    } px-2 py-1 rounded text-xs font-bold`}
                  >
                    {project.isCompleted ? "Completed" : "Awaiting"}
                  </span>
                </div>
                <div className='p-3 card-body'>
                  <p className='description-text p-0 m-0'>
                    <strong>Team:</strong>
                  </p>
                  {project.teamsData ? (
                    <ScrollContainer style={{ cursor: "grab" }}>
                      <div className='flex'>
                        {project.teamsData.map((developerName) => (
                          <div className='px-3 m-1 rounded border' key={developerName}>
                            <p className='p-0 m-0'>{developerName}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollContainer>
                  ) : (
                    <p>not assigned yet</p>
                  )}

                  <p className='description-text my-2'>
                    <strong> Description:</strong> {project.description}
                  </p>
                  <p className='mb-0 small capitalize'>
                    <strong>Supervisor:</strong>{" "}
                    {project.supervisorName ? project.supervisorName : "not assigned yet"}
                  </p>
                  <div className='text-right'>
                    <button
                      onClick={() => navigate(`/supervisor/projects/${project._id}`)}
                      className='view-details-btn'
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <NoContent imgSrc={NoProjects} title='Your added projects will appear here' />
        )}
      </div>
      <AppRefreshButton icon='fa-refresh' onPress={getProjects} />
    </div>
  );
};

export default SupervisorProjects;
