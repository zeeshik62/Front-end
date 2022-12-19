import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllAnnouncement } from "../../../services/http-services/announcement";
import DetailsDialogBox from "../details-dialogbox";

const StudentAnnouncement = () => {
  const [state, setState] = useState([]);
  const [fileShow, setFileShow] = useState();
  const [details, setDetails] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dataFetchRef = useRef(false);

  useEffect(() => {
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    getAnnouncements();
  }, []);

  const getAnnouncements = () => {
    getAllAnnouncement({
      cbSuccess: ({ _ann }) => {
        console.log(_ann);
        let _arr = [];
        _ann.forEach((announcement) => {
          if (announcement.studentList.length > 0) {
            let _announcement = announcement.studentList.find((section) => section.value === user.section);
            if (_announcement) {
              _arr.push(announcement);
            }
          }
        });
        setState(_arr);
      },
      cbFailure: (error) => {
        toast.error(error);
      },
    });
  };

  return (
    <div>
      {state.length > 0 ? (
        <div className='my-6 -mx-3 flex flex-wrap'>
          <div className='mt-0 mb-6 w-full max-w-full px-3 md:mb-0 md:w-1/2 md:flex-none lg:w-full lg:flex-none'>
            <div className='border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border'>
              <div className='border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0'>
                <div className='-mx-3 mt-0 flex flex-wrap'>
                  <div className='mt-0 w-7/12 max-w-full flex-none px-3 lg:w-1/2 lg:flex-none'>
                    <h6>Announcement</h6>
                  </div>
                </div>
              </div>
              <div className='flex-auto p-6 px-0 pb-2'>
                <div className='max-h-96 overflow-y-auto'>
                  <table className='mb-0 w-full items-center border-gray-200 align-top text-slate-500'>
                    <thead className='align-bottom'>
                      <tr>
                        <th className='letter border-b-solid text-xxs whitespace-nowrap border-b border-b-gray-200 bg-transparent px-6 py-3 text-left align-middle font-bold uppercase tracking-normal text-slate-400 opacity-70'>
                          name
                        </th>
                        <th className='letter border-b-solid text-xxs whitespace-nowrap border-b border-b-gray-200 bg-transparent px-6 py-3 pl-2 text-left align-middle font-bold uppercase tracking-normal text-slate-400 opacity-70'>
                          section
                        </th>
                        <th className='letter border-b-solid text-xxs whitespace-nowrap border-b border-b-gray-200 bg-transparent px-6 py-3 text-center align-middle font-bold uppercase tracking-normal text-slate-400 opacity-70'>
                          action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.map((item) => (
                        <tr>
                          <td className='whitespace-nowrap border-b bg-transparent p-2 align-middle'>
                            <div className='flex px-2 py-1'>
                              <div className='flex flex-col justify-center'>
                                <h6 className='mb-0 text-sm leading-normal'>{item.type}</h6>
                              </div>
                            </div>
                          </td>
                          <td className='whitespace-nowrap border-b bg-transparent p-2 text-sm leading-normal'>
                            <span className='text-xs font-semibold leading-tight'>{user?.section}</span>
                          </td>
                          <td className='whitespace-nowrap border-b bg-transparent p-2 text-center align-middle text-sm leading-normal'>
                            <button
                              className='rounded border border-black bg-transparent py-2 px-4 font-semibold text-blue-500 hover:border-transparent hover:bg-blue-500 hover:text-white'
                              onClick={() => {
                                setFileShow(item);
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
                  <p className='font-bold'>No Announcement yet to show!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {details && (
        <DetailsDialogBox isOpen={details} isClose={() => setDetails(false)} projectDetail={fileShow} />
      )}
    </div>
  );
};

export default StudentAnnouncement;
