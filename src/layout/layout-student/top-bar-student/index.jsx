import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { slice as userSlice } from "../../../store/slices/user";
import { slice as settingsSlice } from "../../../store/slices/settings";
import placeholder from "../../../assets/icons/placeholder.png";
import { logOut } from "../../../services/http-services";
import { memoryStrings, routes, sls } from "../../../utils";

const StudentTopBar = () => {
  const [profile, setProfile] = useState(false);
  const { user, settings } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    try {
      logOut({
        cbSuccess: () => {
          sls.remove(memoryStrings.authorization);
          dispatch(userSlice.actions.resetUser());
          navigate(routes.usersCard, { replace: true });
        },
        cbFailure: (error) => {
          toast.error(error);
        },
      });
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <nav className='h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative'>
      <div className='hidden lg:flex w-full pr-6'>
        <div className='w-full flex items-center pl-8 justify-end'>
          <div
            className='flex items-center justify-center relative cursor-pointer'
            onClick={() => setProfile((prev) => !prev)}
          >
            <div className='rounded-full'>
              {profile ? (
                <ul className='p-2 border-r bg-white absolute rounded shadow mt-16 z-10 w-max right-0 space-y-2'>
                  <li className='flex justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center'>
                    <div className='flex items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-user'
                        width={18}
                        height={18}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <circle cx={12} cy={7} r={4} />
                        <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
                      </svg>
                      <span className='text-sm ml-2'>My Profile</span>
                    </div>
                  </li>
                  <li
                    className='flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center'
                    onClick={handleLogOut}
                  >
                    <div className='flex items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-logout'
                        width={20}
                        height={20}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2' />
                        <path d='M7 12h14l-3 -3m0 6l3 -3' />
                      </svg>
                      <span className='text-sm ml-2'>Sign out</span>
                    </div>
                  </li>
                </ul>
              ) : (
                ""
              )}
              <div className='relative'>
                <img className='rounded-full h-10 w-10 object-cover' src={placeholder} alt='avatar' />
                <div className='w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto' />
              </div>
            </div>
            <div className='flex place-content-center justify-center'>
              <div className='text-gray-800 text-sm ml-2 capitalize'>{user.user?.name}</div>
              <div className='cursor-pointer text-gray-600'>
                <svg
                  aria-haspopup='true'
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-chevron-down'
                  width={20}
                  height={20}
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' />
                  <polyline points='6 9 12 15 18 9' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='text-gray-600 mr-8 visible lg:hidden relative'
        onClick={() => dispatch(settingsSlice.actions.sideBarCollapsed())}
        id='menu'
      >
        {settings?.sideBarCollapsed ? (
          ""
        ) : (
          <svg
            aria-label='Main Menu'
            aria-haspopup='true'
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-menu cursor-pointer'
            width={30}
            height={30}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' />
            <line x1={4} y1={8} x2={20} y2={8} />
            <line x1={4} y1={16} x2={20} y2={16} />
          </svg>
        )}
      </div>
    </nav>
  );
};

export default StudentTopBar;
