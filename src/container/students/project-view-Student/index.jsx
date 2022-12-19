import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerLoader, NoContent } from "../../../components/common";
import NoProjects from "../../../assets/img/no-projects.png";
import { applyProject, fileURL } from "../../../services/http-services/projects/index";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import ShowFileMOdel from "../../../components/show-file-model";
import ApplyProjectsModel from "../../../components/show-apply-model";
import back from "../../../assets/icons/arrow-left.png";
import { routes } from "../../../utils/config";
import "../../program-organizer/project-details/ProjectDetails.css";

const ProjectViewStudent = () => {
  const { showProject } = useSelector((state) => state.projects);
  const { user } = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);
  const [showApplyModel, setShowApplyModel] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [teamStatus, setTeamStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const dataFetchRef = useRef(false);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    // setSelectedProject(allProjects.find((el) => el._id == id));
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    getFileURL();
  }, []);

  const getFileURL = () => {
    setLoading(true);
    fileURL({
      values: { project: showProject.find((el) => el._id == id), userId: user._id },
      cbSuccess: (_project, data) => {
        setSelectedProject(_project);
        setTeamStatus(data.teamStatus);
        setLoading(false);
      },
      cbFailure: (error) => {
        toast.error(error);
        setLoading(false);
      },
    });
  };

  const handleApply = () => {
    setLoading(true);
    applyProject({
      values: { ...selectedProject, userId: user._id },
      cbSuccess: (data) => {
        getFileURL();
        toast.success(data.message);
        setLoading(false);
      },
      cbFailure: (error) => {
        toast.error(error);
        setLoading(false);
      },
    });
  };
  if (!showProject) return <NoContent imgSrc={NoProjects} title='Something went wrong, try again' />;
  if (loading) return <ContainerLoader />;

  return (
    <div className='row h-100'>
      <div className='flex place-items-center mb-8 hover:cursor-pointer' onClick={() => navigate(-1)}>
        <img alt='' src={back} height={42} width={42} />
        <span className='ml-2'>Back</span>
      </div>
      <div className='col-sm-8 my-auto'>
        <div className='card'>
          <div className='cardHeader shadow-lg bg-gradient-to-tl from-blue-600 to-cyan-400'>
            <h4 className='cardTitleWhite'>
              {selectedProject?.name ? selectedProject?.name : "No name available"}
            </h4>
            <p className='cardCategoryWhite'>{selectedProject?.isCompleted ? "Completed" : "Awaiting"}</p>
          </div>
          <div className='cardBody mt-12'>
            <h4 className='m-2'>
              {selectedProject?.description ? selectedProject?.description : "No description available"}
            </h4>
          </div>
          <div className='w-full'>
            <div className='imageInput'>
              <i
                onClick={() => setShowModal(true)}
                className='fa fa-file-text-o fa-2x hover:cursor-pointer'
                aria-hidden='true'
              ></i>
            </div>
            <div>
              {teamStatus == "pending" ? (
                <button
                  className='ml-4 mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  onClick={() => navigate(routes.student.teamMembers)}
                >
                  Complete your team
                </button>
              ) : (
                <>
                  {selectedProject?.applied == selectedProject?._id ? (
                    <button
                      disabled
                      className='ml-4 mt-10 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                    >
                      Applied
                    </button>
                  ) : (
                    <button
                      onClick={handleApply}
                      className='ml-4 mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    >
                      Apply
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* <FloatingButton icon="fa-trash" mainStyle="float-red" /> */}
      </div>
      {showApplyModel ? <ApplyProjectsModel close={() => setShowApplyModel(false)} /> : null}
      {showModal ? (
        <ShowFileMOdel file={selectedProject?.imagePath} close={() => setShowModal(false)} />
      ) : null}
    </div>
  );
};

export default ProjectViewStudent;
