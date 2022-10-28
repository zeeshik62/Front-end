import { useEffect, useState } from "react";
import { NoContent } from "../../../components/common";
import NoProjects from "../../../assets/img/no-projects.png";
import ScrollContainer from "react-indiana-drag-scroll";
import { getAllProjects } from "../../../services/http-services/projects";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { slice as projectSlice } from "../../../store/slices/projects";
import { useDispatch } from "react-redux";

const POProjects = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    getAllProjects({
      cbSuccess: ({ projects }) => {
        dispatch(projectSlice.actions.setProjects(projects));
        setList(projects);
      },
      cbFailure: (error) => {
        toast.error(error);
      },
    });
  };

  return (
    <>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              {list?.length > 0 ? (
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 p-0 m-0 w-full items-center'>
                  {list?.map((project) => (
                    <div className='col-span-1 m-2 relative card' key={project._id}>
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
                        <ScrollContainer style={{ cursor: "grab" }}>
                          <div className='flex p-0 m-0'>
                            {project.developers ? (
                              project.developers.map(({ developerName }, i) => (
                                <div className='px-3 m-1 rounded border'>
                                  <p className='p-0 m-0'>{developerName}</p>
                                </div>
                              ))
                            ) : (
                              <p>not assigned yet</p>
                            )}
                          </div>
                        </ScrollContainer>
                        <p className='description-text my-2'>
                          <strong> Description:</strong> {project.description}
                        </p>
                        <p className='mb-0 small capitalize'>
                          <strong>Supervisor:</strong>{" "}
                          {project.clientName ? project.clientName : "not assigned yet"}
                        </p>
                        <div className='text-right'>
                          <button
                            onClick={() => navigate(`/program-organizer/projects/${project._id}`)}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default POProjects;
