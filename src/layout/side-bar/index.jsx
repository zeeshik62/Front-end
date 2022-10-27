import { Link, useLocation } from "react-router-dom";
import { sidebarData } from "./data";
import { slice as settingsSlice } from "../../store/slices/settings";
import appLogo from "../../assets/icons/logo.png";
import { useDispatch, useSelector } from "react-redux";
import placeholder from "../../assets/icons/placeholder.png";

const SideBar = () => {
  const { user, settings } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <>
      <div className='w-64 absolute lg:relative bg-light h-screen flex-col justify-between hidden lg:flex'>
        <div className='p-8'>
          <div className='h-16 my-8 w-full flex items-center'>
            <img
              className='shadow-lg p-3 rounded-circle App-logo'
              style={{
                objectFit: "cover",
                width: 125,
                height: 125,
              }}
              alt='app_logo'
              src={appLogo}
            />
          </div>
          <ul className='mt-12'>
            {sidebarData.map((el) => (
              <li
                className={`flex w-full justify-between ${
                  pathname === el.path ? "text-indigo-700" : "text-gray-600"
                } cursor-pointer items-center mb-6`}
                key={el.id}
              >
                <Link className='flex items-center no-underline' to={el.path}>
                  {el.icon}
                  <span className='text-sm ml-2'>{el.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col items-center mb-4 px-8'>
          <p className='text-gray-600 text-sm font-medium'>FYP</p>
          <p className='text-gray-600 text-xs'>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
      <div
        className={
          settings?.sideBarCollapsed
            ? "w-full h-full absolute z-40  transform  translate-x-0"
            : "w-full h-full absolute z-40  transform -translate-x-full"
        }
      >
        <div
          className='bg-gray-800 opacity-50 w-full h-full absolute'
          onClick={() => dispatch(settingsSlice.actions.sideBarCollapsed())}
        ></div>
        <div className='w-64 md:w-96 absolute z-40 bg-white shadow h-full flex-col justify-between lg:hidden pb-4 transition duration-150 ease-in-out'>
          <div className='flex flex-col justify-between h-full'>
            <div>
              <div className='flex items-center justify-between p-8'>
                <div className='h-16 w-full flex items-center'>
                  <img className='App-logo' alt='app_logo' src={appLogo} />
                </div>
                <div
                  id='closeSideBar'
                  className='flex items-center justify-center h-10 w-10'
                  onClick={() => dispatch(settingsSlice.actions.sideBarCollapsed())}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-x'
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
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
              <div className='px-8'>
                <ul className='mt-12'>
                  {sidebarData.map((el) => (
                    <li
                      className={`flex w-full justify-between ${
                        pathname === el.path ? "text-indigo-700" : "text-gray-600"
                      } cursor-pointer items-center mb-6 hover:text-indigo-700`}
                      key={el.id}
                    >
                      <Link className='flex items-center' to={el.path}>
                        {el.icon}
                        <span className='xl:text-base md:text-2xl text-base ml-2'>{el.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='w-full'>
              <div className='border-t border-gray-300'>
                <div className='w-full flex items-center justify-between px-6 pt-1'>
                  <div className='flex items-center'>
                    <img alt='profile-pic' src={placeholder} className='w-8 h-8 rounded-md' />
                    <p className='md:text-xl text-gray-800 text-base leading-4 ml-2'>{user?.userName}</p>
                  </div>
                  <ul className='flex'>
                    <li className='cursor-pointer text-white pt-5 pb-3 pl-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-bell'
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        strokeWidth={1}
                        stroke='#718096'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <path d='M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6' />
                        <path d='M9 17v1a3 3 0 0 0 6 0v-1' />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
