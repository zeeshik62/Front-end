import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppLoader, ContainerLoader, NoContent } from "../../../components/common";
import NoProjects from "../../../assets/img/no-projects.png";
import { toast } from "react-toastify";
import { getProjectInfo, updateStage } from "../../../services/http-services/projects";
import { ShowFileModel } from "../../../components";
import "./ProjectDetails.css";
import back from "../../../assets/icons/arrow-left.png";
import { useRef } from "react";

const ProjectDetails = () => {
  let { id } = useParams();
  const { allProjects } = useSelector((state) => state.projects);
  const { user } = useSelector((state) => state.user);

  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dataFetchRef = useRef(false);

  useEffect(() => {
    // setSelectedProject(allProjects.find((el) => el._id == id));
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    getFileURL();
  }, []);

  const getFileURL = () => {
    setLoading(true);
    getProjectInfo({
      values: allProjects.find((el) => el._id == id),
      cbSuccess: (data) => {
        setSelectedProject(data);
        setLoading(false);
      },
      cbFailure: (error) => {
        toast.error(error);
        setLoading(false);
      },
    });
  };

  const handleStage = (params) => {
    updateStage({
      values: allProjects.find((el) => el._id == id),
      cbSuccess: (data) => {
        setSelectedProject(data);
        setLoading(false);
      },
      cbFailure: (error) => {
        toast.error(error);
        setLoading(false);
      },
    });
  };

  if (!allProjects) return <NoContent imgSrc={NoProjects} title='Something went wrong, try again' />;
  if (loading) return <ContainerLoader />;

  return (
    <div className='row h-100'>
      <div className='flex place-items-center mb-8 hover:cursor-pointer' onClick={() => navigate(-1)}>
        <img alt='' src={back} height={42} width={42} />
        <span className='ml-2'>Back</span>
      </div>
      {selectedProject && (
        <div className='col-sm-8 my-auto'>
          <div className='card'>
            <div className='cardHeader shadow-lg bg-gradient-to-tl from-blue-600 to-cyan-400'>
              <h4 className='cardTitleWhite'>
                {selectedProject?.name ? selectedProject?.name : "No name available"}
              </h4>
              <p className='cardCategoryWhite'>{selectedProject?.isCompleted ? "Assigned" : "Awaiting"}</p>
            </div>
            <div className='cardBody my-12'>
              <h4 className='m-2'>
                {selectedProject?.description ? selectedProject?.description : "No description available"}
              </h4>
            </div>
            <div className='cardFooter'>
              <div>
                <h6>Developer</h6>
                <div className='footerItems'>
                  {selectedProject?.teamsData?.length > 0 ? (
                    selectedProject?.teamsData?.map((member) => (
                      <div key={member._id}>
                        <p>{member}</p>
                      </div>
                    ))
                  ) : (
                    <p>No developers</p>
                  )}
                </div>
              </div>
              <div>
                <h6>Supervisor</h6>
                <div className='footerItems shadow-lg'>
                  <p>{user?.name ? user?.name : "No supervisor name"}</p>
                </div>
              </div>
            </div>

            <div className='w-full my-8'>
              <p className='ml-4 badge-danger w-32 rounded p-2 capitalize hover:cursor-default'>
                Stage: {selectedProject?.stage}
              </p>
              <div className='imageInput'>
                <i
                  className='fa fa-file-text-o fa-2x hover:cursor-pointer'
                  aria-hidden='true'
                  onClick={() => setShowModal(true)}
                ></i>
              </div>
              <div className='imageInput'>
                <i
                  className='fa fa-meetup fa-2x hover:cursor-pointer'
                  aria-hidden='true'
                  onClick={handleStage}
                ></i>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal ? (
        <ShowFileModel file={selectedProject?.imagePath} close={() => setShowModal(false)} />
      ) : null}
    </div>
  );
};

export default ProjectDetails;
