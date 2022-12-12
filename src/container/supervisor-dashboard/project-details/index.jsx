import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppLoader, ContainerLoader, NoContent } from "../../../components/common";
import NoProjects from "../../../assets/img/no-projects.png";
import { toast } from "react-toastify";
import { getProjectInfo } from "../../../services/http-services/projects";
import { ShowFileModel } from "../../../components";
import "./ProjectDetails.css";
import back from "../../../assets/icons/arrow-left.png";

const ProjectDetails = () => {
  let { id } = useParams();
  const { allProjects } = useSelector((state) => state.projects);
  const { user } = useSelector((state) => state.user);

  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // setSelectedProject(allProjects.find((el) => el._id == id));
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

  if (!allProjects) return <NoContent imgSrc={NoProjects} title='Something went wrong, try again' />;
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
            <p className='cardCategoryWhite'>{selectedProject?.isCompleted ? "Assigned" : "Awaiting"}</p>
          </div>
          <div className='cardBody my-12'>
            <h4 className='m-2'>
              {selectedProject?.description ? selectedProject?.description : "No description available"}
            </h4>
          </div>
          <div className='cardFooter'>
            {/* <div>
              <h6>Developer</h6>
              <div className='footerItems'>
                {selectedProject?.developers?.length !== 0 &&
                  selectedProject?.developers.map((developer) => (
                    <Fragment key={developer.email}>
                      <p>{developer.name}</p>
                      <p>{developer.email}</p>
                    </Fragment>
                  ))}
              </div>
            </div> */}
            <div>
              <h6>Supervisor</h6>
              <div className='footerItems shadow-lg'>
                <p>{user?.name ? user?.name : "No supervisor name"}</p>
                <p>{user?.email ? user?.email : "No supervisor email"}</p>
              </div>
            </div>
            <div>
              <h6>Developers</h6>
              <div className='footerItems shadow-lg'>
                <p>{selectedProject?.clientName ? selectedProject?.clientName : "No Developers name"}</p>
                <p>{selectedProject?.clientEmail ? selectedProject?.clientEmail : "No Developers email"}</p>
              </div>
            </div>
          </div>

          <div className='w-full'>
            <div className='imageInput'>
              <i
                className='fa fa-file-text-o fa-2x hover:cursor-pointer'
                aria-hidden='true'
                onClick={() => setShowModal(true)}
              ></i>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <ShowFileModel file={selectedProject?.imagePath} close={() => setShowModal(false)} />
      ) : null}
    </div>
  );
};

export default ProjectDetails;
