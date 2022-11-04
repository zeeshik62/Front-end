import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { NoContent } from "../../../components/common";
import NoProjects from "../../../assets/img/no-projects.png";
import "./ProjectDetails.css";
import { toast } from "react-toastify";
import { fileURL } from "../../../services/http-services/projects";

const ProjectDetails = () => {
  let { id } = useParams();
  const { allProjects } = useSelector((state) => state.projects);

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // setSelectedProject(allProjects.find((el) => el._id == id));
    getFileURL();
  }, []);

  const getFileURL = () => {
    fileURL({
      values: allProjects.find((el) => el._id == id),
      cbSuccess: (data) => {
        setSelectedProject(data);
      },
      cbFailure: (error) => {
        toast.error(error);
      },
    });
  };

  if (!allProjects) return <NoContent imgSrc={NoProjects} title='Something went wrong, try again' />;

  return (
    <>
      <div className='row h-100'>
        <div className='col-sm-8 my-auto'>
          <div className='card'>
            <div className='cardHeader shadow-lg bg-gradient-to-tl from-blue-600 to-cyan-400'>
              <h4 className='cardTitleWhite'>
                {selectedProject?.name ? selectedProject?.name : "No name available"}
              </h4>
              <p className='cardCategoryWhite'>{selectedProject?.isCompleted ? "Completed" : "Awaiting"}</p>
            </div>
            <div className='cardBody mt-12'>
              <h4>
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
                  <p>
                    {selectedProject?.teamLeadName ? selectedProject?.teamLeadName : "No supervisor name"}
                  </p>
                  <p>
                    {selectedProject?.teamLeadEmail ? selectedProject?.teamLeadEmail : "No supervisor email"}
                  </p>
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
                {/* <img src={allProjects.imgSrc} /> */}
                <i className='fa fa-file-text-o fa-2x' aria-hidden='true'></i>
              </div>
            </div>
          </div>

          {/* <FloatingButton icon="fa-trash" mainStyle="float-red" /> */}
        </div>
        <iframe width='100%' height={400} src={selectedProject?.imagePath}></iframe>

        <iframe width={"100%"} height={800} src={selectedProject?.imagePath}></iframe>
      </div>
    </>
  );
};

export default ProjectDetails;
