import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import DetailsDialogBox from "./details-dialogbox";
import placeholder from "../../assets/icons/project-placeholder.png";
import { getAllDashboardData } from "../../services/http-services/hod";
import { AppRefreshButton } from "../../components/common";

const HodDashboard = () => {
  const [project, setProject] = useState([]);
  const [state, setState] = useState({
    totalProject: 0,
    totalSupervisor: 0,
    totalStudents: 0,
    totalApplied: 0,
  });
  const [details, setDetails] = useState(false);
  const [projectDetails, setProjectDetails] = useState(false);
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
      cbSuccess: ({ _projects, _supervisors, _students, _appliedProjects }) => {
        setProject(_projects);
        setState({
          ...state,
          totalProject: _projects.length,
          totalSupervisor: _supervisors.length,
          totalStudents: _students.length,
          totalApplied: _appliedProjects.length,
        });
      },
      cbFailure: (error) => {
        toast.error(error.message);
      },
    });
  };

  const completion = (params) => {
    const obj = {
      initial: "0%",
      first: "25%",
      second: "50%",
      third: "75%",
      fourth: "100%",
    };
    return obj[params];
  };

  const progressBar = (params) => {
    let classes =
      "duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all";
    let width = "";
    if (params == "initial") width = " w-1";
    if (params == "first") width = " w-3/12";
    if (params == "second") width = " w-6/12";
    if (params == "third") width = " w-9/12";
    if (params == "fourth") width = " w-full";
    return classes + width;
  };

  return (
    <div className='w-full px-6 mx-auto'>
      <div className='flex flex-wrap -mx-3'>
        <div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
          <div className='relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border'>
            <div className='flex-auto p-4'>
              <div className='flex flex-row -mx-3'>
                <div className='flex-none w-2/3 max-w-full px-3'>
                  <div>
                    <p className='mb-0 font-sans font-semibold leading-normal text-sm'>Total Projects</p>
                    <h5 className='mb-0 font-bold'>{state.totalProject}</h5>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-600 to-cyan-400'>
                    <i
                      className='fa fa-file-code-o fa-lg leading-none relative top-3 text-white'
                      aria-hidden='true'
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
          <div className='relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border'>
            <div className='flex-auto p-4'>
              <div className='flex flex-row -mx-3'>
                <div className='flex-none w-2/3 max-w-full px-3'>
                  <div>
                    <p className='mb-0 font-sans font-semibold leading-normal text-sm'>Total Students</p>
                    <h5 className='mb-0 font-bold'>{state.totalStudents}</h5>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-600 to-cyan-400'>
                    <i
                      className='fa fa-graduation-cap fa-lg leading-none relative top-3 text-white'
                      aria-hidden='true'
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
          <div className='relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border'>
            <div className='flex-auto p-4'>
              <div className='flex flex-row -mx-3'>
                <div className='flex-none w-2/3 max-w-full px-3'>
                  <div>
                    <p className='mb-0 font-sans font-semibold leading-normal text-sm'>Total Supervisors</p>
                    <h5 className='mb-0 font-bold'>{state.totalSupervisor}</h5>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-600 to-cyan-400'>
                    <i
                      className='fa fa-tasks fa-lg relative top-3 leading-none text-white'
                      aria-hidden='true'
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4'>
          <div className='relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border'>
            <div className='flex-auto p-4'>
              <div className='flex flex-row -mx-3'>
                <div className='flex-none w-2/3 max-w-full px-3'>
                  <div>
                    <p className='mb-0 font-sans font-semibold leading-normal text-sm'>Applied Project</p>
                    <h5 className='mb-0 font-bold'>{state.totalApplied}</h5>
                  </div>
                </div>
                <div className='px-3 text-right basis-1/3'>
                  <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-600 to-cyan-400'>
                    <i
                      className='fa fa-file-code-o fa-lg leading-none relative top-3 text-white'
                      aria-hidden='true'
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {project.length > 0 ? (
        <div className='my-6 -mx-3 flex flex-wrap'>
          <div className='mt-0 mb-6 w-full max-w-full px-3 md:mb-0 md:w-1/2 md:flex-none lg:w-full lg:flex-none'>
            <div className='border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border'>
              <div className='border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0'>
                <div className='-mx-3 mt-0 flex flex-wrap'>
                  <div className='mt-0 w-7/12 max-w-full flex-none px-3 lg:w-1/2 lg:flex-none'>
                    <h6>Project</h6>
                  </div>
                </div>
              </div>
              <div className='flex-auto p-6 px-0 pb-2'>
                <div className='max-h-96 overflow-y-auto'>
                  <table className='mb-0 w-full items-center border-gray-200 align-top text-slate-500'>
                    <thead className='align-bottom'>
                      <tr>
                        <th className='letter border-b-solid text-xxs whitespace-nowrap border-b border-b-gray-200 bg-transparent px-6 py-3 text-left align-middle font-bold uppercase tracking-normal text-slate-400 opacity-70'>
                          Name
                        </th>
                        <th className='letter border-b-solid text-xxs whitespace-nowrap border-b border-b-gray-200 bg-transparent px-6 py-3 text-center align-middle font-bold uppercase tracking-normal text-slate-400 opacity-70'>
                          Supervisor
                        </th>
                        <th className='letter border-b-solid text-xxs whitespace-nowrap border-b border-b-gray-200 bg-transparent px-6 py-3 text-center align-middle font-bold uppercase tracking-normal text-slate-400 opacity-70'>
                          Completion
                        </th>
                        <th className='letter border-b-solid text-xxs whitespace-nowrap border-b border-b-gray-200 bg-transparent px-6 py-3 text-center align-middle font-bold uppercase tracking-normal text-slate-400 opacity-70'>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.map((pro) => (
                        <tr key={pro._id}>
                          <td className='whitespace-nowrap border-b bg-transparent p-2 align-middle'>
                            <div className='flex px-2 py-1'>
                              <div>
                                <img
                                  src={placeholder}
                                  className='ease-soft-in-out mr-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm text-white transition-all duration-200'
                                  alt='xd'
                                />
                              </div>
                              <div className='flex flex-col justify-center'>
                                <h6 className='mb-0 text-sm leading-normal'>{pro.name}</h6>
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap border-b bg-transparent p-2 text-center align-middle text-sm leading-normal'>
                            <span className='text-xs font-semibold leading-tight'>{pro.supervisorName}</span>
                          </td>
                          <td className='whitespace-nowrap border-b bg-transparent p-2 align-middle'>
                            <div className='mx-auto w-3/4'>
                              <div>
                                <div>
                                  <span className='text-xs font-semibold leading-tight'>
                                    {completion(pro.stage)}
                                  </span>
                                </div>
                              </div>
                              <div className='h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200 text-xs'>
                                <div
                                  className={progressBar(pro.stage)}
                                  role='progressbar'
                                  aria-valuenow='0'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap border-b bg-transparent p-2 text-center align-middle text-sm leading-normal'>
                            <button
                              className='rounded border border-black bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white'
                              onClick={() => {
                                setProjectDetails(pro);
                                setDetails(true);
                              }}
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='my-6 -mx-3 flex flex-wrap'>
          <div className='mt-0 mb-6 w-full max-w-full px-3 md:mb-0 md:w-1/2 md:flex-none lg:w-full lg:flex-none'>
            <div className='border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border'>
              <div className='border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0'>
                <div className='-mx-3 mt-0 flex flex-wrap items-center justify-center'>
                  <p className='font-bold'>No project yet to show!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {details ? (
        <DetailsDialogBox projectDetail={projectDetails} isOpen={details} isClose={() => setDetails(false)} />
      ) : null}
      <AppRefreshButton onPress={getDashboardData} icon='fa-refresh' />
    </div>
  );
};

export default HodDashboard;
