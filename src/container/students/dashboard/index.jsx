import { useEffect, useRef, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import placeholder from "../../../assets/icons/project-placeholder.png";
import { AppProgressBar } from "../../../components/common";
import { getAllDashboardData } from "../../../services/http-services/students";
import { getBadgeClasses } from "../../../utils";

const PSDashboard = () => {
  const [project, setProject] = useState(null);
  const [stage, setStage] = useState("");
  const [progressbar, setProgressBar] = useState({ first: "", second: "", third: "", full: "" });
  const { user } = useSelector((state) => state.user);
  const dataFetchRef = useRef(false);

  useEffect(() => {
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    getDashboardData();
  }, []);

  const getDashboardData = () => {
    getAllDashboardData({
      id: user?._id,
      cbSuccess: ({ _project }, { projects }) => {
        setProject(projects.find((el) => el._id == _project._id));
        manageBars(_project.stage);
        setStage(_project.stage);
      },
      cbFailure: (error) => {
        toast.error(error.message);
      },
    });
  };

  const manageBars = (params) => {
    const obj = {
      initial: { first: "100%", second: "0%", third: "0%", full: "0%" },
      second: { first: "100%", second: "100%", third: "0%", full: "0%" },
      third: { first: "100%", second: "100%", third: "100%", full: "0%" },
      fourth: { first: "100%", second: "100%", third: "100%", full: "100%" },
    };
    let percent = obj[params];
    setProgressBar(percent);
  };

  const completion = () => {
    const obj = {
      initial: "25%",
      second: "50%",
      third: "75%",
      fourth: "100%",
    };
    return obj[stage];
  };

  const progressBar = () => {
    let classes =
      "duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all";
    let width = "";
    if (stage == "initial") width = " w-3/12";
    if (stage == "second") width = " w-6/12";
    if (stage == "third") width = " w-9/12";
    if (stage == "fourth") width = " w-full";
    return classes + width;
  };

  return (
    <div className='w-full px-6 mx-auto'>
      <AppProgressBar bar={progressbar} />

      {project ? (
        <div className='flex flex-wrap my-6 -mx-3'>
          <div className='w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-full lg:flex-none'>
            <div className='border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border'>
              <div className='border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0'>
                <div className='flex flex-wrap mt-0 -mx-3'>
                  <div className='flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none'>
                    <h6>Project</h6>
                  </div>
                </div>
              </div>
              <div className='flex-auto p-6 px-0 pb-2'>
                <div className='overflow-y-auto max-h-96'>
                  <table className='items-center w-full mb-0 align-top border-gray-200 text-slate-500'>
                    <thead className='align-bottom'>
                      <tr>
                        <th className='px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70'>
                          Name
                        </th>
                        <th className='px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70'>
                          Members
                        </th>
                        <th className='px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70'>
                          Supervisor
                        </th>
                        <th className='px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70'>
                          Completion
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='flex px-2 py-1'>
                            <div>
                              <img
                                src={placeholder}
                                className='inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl'
                                alt='xd'
                              />
                            </div>
                            <div className='flex flex-col justify-center'>
                              <h6 className='mb-0 leading-normal text-sm'>{project.name}</h6>
                            </div>
                          </div>
                        </td>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <ScrollContainer style={{ cursor: "grab" }}>
                            <div className='flex'>
                              {project.teamsData.map((developerName) => (
                                <div className={getBadgeClasses()}>
                                  <p className='p-0 m-0'>{developerName}</p>
                                </div>
                              ))}
                            </div>
                          </ScrollContainer>
                        </td>
                        <td className='p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap'>
                          <span className='font-semibold leading-tight text-xs'>
                            {project.supervisorName}
                          </span>
                        </td>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='w-3/4 mx-auto'>
                            <div>
                              <div>
                                <span className='font-semibold leading-tight text-xs'>{completion()}</span>
                              </div>
                            </div>
                            <div className='text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200'>
                              <div
                                className={progressBar()}
                                role='progressbar'
                                aria-valuenow='0'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-wrap my-6 -mx-3'>
          <div className='w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-full lg:flex-none'>
            <div className='border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border'>
              <div className='border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0'>
                <div className='flex flex-wrap mt-0 -mx-3 items-center justify-center'>
                  <p className='font-bold'>No project yet to show!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PSDashboard;
