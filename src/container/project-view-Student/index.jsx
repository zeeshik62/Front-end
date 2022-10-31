import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NoContent } from "../../components/common";
import NoProjects from "../../assets/img/no-projects.png";
import "../../container/program-organizer/project-details/ProjectDetails.css";
import { fileURL } from "../../services/http-services/projects/index";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import ShowFileMOdel from "../../components/show-file-model";
import ApplyProjectsModel from "../../components/show-apply-model";

const ProjectViewStudent = () => {
  const { showProject } = useSelector((state) => state.projects);
  const [showModal, setShowModal] = useState(false);

  const [showApplyModel, setShowApplyModel] = useState(false);

  let { id } = useParams();

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // setSelectedProject(allProjects.find((el) => el._id == id));
    getFileURL();
  }, []);
  const getFileURL = () => {
    fileURL({
      values: showProject.find((el) => el._id == id),
      cbSuccess: (data) => {
        setSelectedProject(data);
      },
      cbFailure: (error) => {
        toast.error(error);
      },
    });
  };
  if (!showProject)
    return (
      <NoContent imgSrc={NoProjects} title="Something went wrong, try again" />
    );

  return (
    <>
      {" "}
      {showApplyModel ? (
        <ApplyProjectsModel close={() => setShowApplyModel(false)} />
      ) : null}
      {showModal ? (
        <ShowFileMOdel
          file={selectedProject?.imagePath}
          close={() => setShowModal(false)}
        />
      ) : null}
      <div className="row h-100">
        <div className="col-sm-8 my-auto">
          <div className="card">
            <div className="cardHeader shadow-lg bg-gradient-to-tl from-blue-600 to-cyan-400">
              <h4 className="cardTitleWhite">
                {selectedProject?.name
                  ? selectedProject?.name
                  : "No name available"}
              </h4>
              <p className="cardCategoryWhite">
                {selectedProject?.isCompleted ? "Completed" : "Awaiting"}
              </p>
            </div>
            <div className="cardBody mt-12">
              <h4>
                {selectedProject?.description
                  ? selectedProject?.description
                  : "No description available"}
              </h4>
            </div>
            <div className="cardFooter">
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
                <div className="footerItems shadow-lg">
                  <p>
                    {selectedProject?.teamLeadName
                      ? selectedProject?.teamLeadName
                      : "No supervisor name"}
                  </p>
                  <p>
                    {selectedProject?.teamLeadEmail
                      ? selectedProject?.teamLeadEmail
                      : "No supervisor email"}
                  </p>
                </div>
              </div>
              <div>
                <h6>Developers</h6>
                <div className="footerItems shadow-lg">
                  <p>
                    {selectedProject?.clientName
                      ? selectedProject?.clientName
                      : "No Developers name"}
                  </p>
                  <p>
                    {selectedProject?.clientEmail
                      ? selectedProject?.clientEmail
                      : "No Developers email"}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="imageInput">
                {/* <img src={allProjects.imgSrc} /> */}
                <i
                  onClick={() => setShowModal(true)}
                  className="fa fa-file-text-o fa-2x"
                  aria-hidden="true"
                ></i>
              </div>
              <button
                onCLick={() => setShowApplyModel(true)}
                className="ml-10 mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Apply
              </button>{" "}
            </div>
          </div>

          {/* <FloatingButton icon="fa-trash" mainStyle="float-red" /> */}
        </div>
      </div>
    </>
  );
};

export default ProjectViewStudent;
