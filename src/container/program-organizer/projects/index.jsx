import { useState } from "react";
import { NoContent } from "../../../components/common";
import { projectsData } from "./data";
import NoProjects from "../../../assets/img/no-projects.png";
import ScrollContainer from "react-indiana-drag-scroll";

const POProjects = () => {
  const [list] = useState(projectsData);

  return (
    <>
      <h1>Projects</h1>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              {list?.length > 0 ? (
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 p-0 m-0 w-full items-center'>
                  {list?.map((project) => (
                    <div className='col-span-1 m-2 relative card' key={project._id}>
                      <div className='flex flex-wrap m-0 p-2 justify-between items-center card-header'>
                        <h5 className='font-light p-0 m-0'>{project.projectName}</h5>
                        <span
                          className={`${
                            project.isCompleted ? "badge-success" : "badge-danger"
                          } px-2 py-1 rounded text-xs font-bold`}
                        >
                          {project.isCompleted ? "Completed" : "Awaiting feedback"}
                        </span>
                      </div>
                      <div className='p-3 card-body'>
                        <p className='description-text p-0 m-0'>
                          <strong>Team:</strong>
                        </p>
                        <ScrollContainer style={{ cursor: "grab" }}>
                          <div className='flex p-0 m-0'>
                            {project.developers.map(({ developerName }, i) => (
                              <div className='px-3 m-1 rounded border'>
                                <p className='p-0 m-0'>{developerName}</p>
                              </div>
                            ))}
                          </div>
                        </ScrollContainer>
                        <p className='description-text my-2'>
                          <strong> Description:</strong> {project.projectDescription}
                        </p>
                        <p className='mb-0 small capitalize'>
                          <strong>Supervisor:</strong> {project.clientName}
                        </p>
                        <div className='text-right'>
                          <button
                            // onClick={() => history.push(`/projectDetails/${_id}`)}
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
