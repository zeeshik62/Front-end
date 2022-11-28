import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ContainerLoader from "../../../components/common/container-loader";
import { acceptNotification, getAllNotifications, rejectNotification } from "../../../services/http-services";
import { slice as settingsSlice } from "../../../store/slices/settings";

const Notifications = () => {
  const [notificationList, setNotificationList] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    settings: { notification },
    user: { user },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notification) getNotifications();
  }, []);

  const getNotifications = () => {
    setLoading(true);
    getAllNotifications({
      id: user._id,
      cbSuccess: ({ _notifications }) => {
        setNotificationList(_notifications);
        setLoading(false);
      },
      cbFailure: (error) => {
        toast.error(error);
        setLoading(false);
      },
    });
  };

  const handleHide = () => {
    dispatch(settingsSlice.actions.notificationCollapsed());
  };

  const handleAccept = (params) => {
    setLoading(true);
    acceptNotification({
      values: params,
      cbSuccess: ({ message }) => {
        let arr = notificationList;
        setNotificationList(arr.filter((el) => el._id !== params._id));
        setLoading(false);
        toast.success(message);
      },
      cbFailure: (error) => {
        toast.error(error);
        setLoading(false);
      },
    });
  };
  const handleCancel = (params) => {
    rejectNotification({
      values: params,
      cbSuccess: ({ _notifications }) => {
        setNotificationList(_notifications);
        setLoading(false);
      },
      cbFailure: (error) => {
        toast.error(error);
        setLoading(false);
      },
    });
  };

  return (
    <div className={!notification ? "hidden" : "fixed overflow-y-scroll inset-0 z-50"}>
      <div onClick={() => handleHide()} className='absolute h-full inset-0  z-0' />
      <div className='flex w-full justify-end'>
        <div className='bg-gray-800 w-11/12 sm:w-96 pt-6 min-h-screen z-50'>
          <div className='container flex flex-col w-full h-full text-center'>
            <div className='flex w-full justify-between px-8 items-center'>
              <p className='text-base font-bold text-white'>Activity Board</p>

              <div onClick={() => handleHide()} className='block ml-5 cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-x'
                  width={32}
                  height={32}
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#ffffff'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            </div>
            {loading ? <ContainerLoader loading={loading} /> : null}
            {notificationList.length > 0 ? (
              notificationList.map((el) => (
                <>
                  <div className='px-8 py-8'>
                    <div className='flex justify-between w-full'>
                      <p className='text-xs sm:text-base font-bold leading-tight text-white capitalize'>
                        {el.type}:
                      </p>
                      <p className='text-xs leading-3 text-right text-gray-600'>
                        {moment(el.createdAt).startOf("hour").fromNow()}
                      </p>
                    </div>
                    <div className='mt-4 flex items-center'>
                      <p className='text-white'>Sent by:</p>
                      <p className='ml-2 text-xs leading-3 text-gray-600'>{el.name}</p>
                    </div>
                    <div className='flex items-center mt-8'>
                      <button
                        className='py-2 px-3 bg-gradient-to-br from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-sm inline-flex items-center'
                        onClick={() => handleAccept(el)}
                      >
                        <i
                          class='fa fa-check fa-pull-left fa-border'
                          aria-hidden='true'
                          style={{ color: "white" }}
                        ></i>
                        <span className='text-xs text-white ml-1'>Accept</span>
                      </button>
                      <button
                        className='py-2 ml-3 px-3 bg-gray-700 hover:bg-gray-600 ease-in duration-150 rounded-sm flex items-center'
                        onClick={() => handleCancel(el)}
                      >
                        <i
                          class='fa fa-ban fa-pull-left fa-border'
                          aria-hidden='true'
                          style={{ color: "white" }}
                        ></i>
                        <span className='text-xs leading-3 text-white ml-1'>Cancel</span>
                      </button>
                    </div>
                  </div>
                  <div className='opacity-50 w-full h-0.5 border border-gray-900' />
                </>
              ))
            ) : (
              <p className='text-white mt-8'>No notifications!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
