import team1 from "../../../assets/icons/team-1.jpg";
import team2 from "../../../assets/icons/team-2.jpg";
import team3 from "../../../assets/icons/team-3.jpg";
import team4 from "../../../assets/icons/team-4.jpg";
import { useEffect, useState } from "react";
import { getProjectRequests } from "../../../services/http-services/projects";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { slice as projectSlice } from "../../../store/slices/projects";
import { useDispatch, useSelector } from "react-redux";

const SupervisorRequests = () => {
  const { allProjects } = useSelector((state) => state.projects);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState(false);
  console.log(user);
  useEffect(() => {
    // if (allProjects.length == 0)
    getProjects();
  }, []);

  const getProjects = () => {
    setLoading(true);
    getProjectRequests({
      userId: user?._id,
      cbSuccess: ({ _requests }) => {
        console.log("🚀 ~ file: index.jsx:27 ~ get_requests ~ projects", _requests);
        setRequests(_requests);
        setLoading(false);
      },
      cbFailure: (error) => {
        toast.error(error);
        setLoading(false);
      },
    });
  };
  return (
    <div className='flex flex-wrap my-6 -mx-3'>
      <div className='w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-full lg:flex-none'>
        <div className='border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border'>
          <div className='border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0'>
            <div className='flex flex-wrap mt-0 -mx-3'>
              <div className='flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none'>
                <h6>Project Request</h6>
                <p className='mb-0 leading-normal text-sm'>
                  <i className='fa fa-check text-cyan-500'></i>
                  <span className='ml-1 font-semibold'>30 done</span>
                </p>
              </div>
            </div>
          </div>
          <div className='flex-auto p-6 px-0 pb-2'>
            <div className='overflow-y-auto max-h-96'>
              <table className='items-center w-full mb-0 align-top border-gray-200 text-slate-500'>
                <thead className='align-bottom'>
                  <tr>
                    <th className='px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70'>
                      Project Name
                    </th>
                    <th className='px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70'>
                      Members
                    </th>
                    <th className='px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70'>
                      Section
                    </th>
                    <th className='px-6 py-3 font-bold tracking-normal text-start uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70'>
                      Completion
                    </th>
                    <th className='px-6 py-3 font-bold tracking-normal text-start uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((el) => (
                    <tr>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                        <div className='flex px-2 py-1'>
                          <div className='flex flex-col justify-center'>
                            <h6 className='mb-0 leading-normal text-sm'>{el.projectDetails.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                        <div className='mt-2 avatar-group'>
                          <a
                            href='#/'
                            className='relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                            data-target='tooltip_trigger'
                            data-placement='bottom'
                          >
                            <img src={team1} className='w-full rounded-full' alt='team1' />
                          </a>
                          <div
                            data-target='tooltip'
                            className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                            role='tooltip'
                          >
                            Ryan Tompson
                            <div
                              className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                              data-popper-arrow
                            ></div>
                          </div>
                          <a
                            href='#/'
                            className='relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                            data-target='tooltip_trigger'
                            data-placement='bottom'
                          >
                            <img src={team2} className='w-full rounded-full' alt='team2' />
                          </a>
                          <div
                            data-target='tooltip'
                            className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                            role='tooltip'
                          >
                            Romina Hadid
                            <div
                              className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                              data-popper-arrow
                            ></div>
                          </div>
                          <a
                            href='#/'
                            className='relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                            data-target='tooltip_trigger'
                            data-placement='bottom'
                          >
                            <img src={team3} className='w-full rounded-full' alt='team3' />
                          </a>
                          <div
                            data-target='tooltip'
                            className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                            role='tooltip'
                          >
                            Alexander Smith
                            <div
                              className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                              data-popper-arrow
                            ></div>
                          </div>
                          <a
                            href='#/'
                            className='relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                            data-target='tooltip_trigger'
                            data-placement='bottom'
                          >
                            <img src={team4} className='w-full rounded-full' alt='team4' />
                          </a>
                          <div
                            data-target='tooltip'
                            className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                            role='tooltip'
                          >
                            Jessica Doe
                            <div
                              className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                              data-popper-arrow
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className='p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap'>
                        <span className='font-semibold leading-tight text-xs'>
                          {el.projectDetails?.stack}
                        </span>
                      </td>
                      <td className='p-2 align-center bg-transparent border-b whitespace-nowrap'>
                        <div className='px-5'>
                          <p>{el.projectDetails.isCompleted ? "Completed" : "Pending"}</p>
                        </div>
                      </td>
                      <td className='p-2 align-center bg-transparent border-b whitespace-nowrap'>
                        <div className='px-5 rounded border border-black hover:cursor-pointer'>Accept</div>
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
  );
};

export default SupervisorRequests;
