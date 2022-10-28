import { Outlet } from "react-router-dom";
import SideBar from "./side-bar";
import TopBar from "./top-bar";

const Layout = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-no-wrap'>
        <SideBar />
        <div className='w-full h-screen overflow-auto'>
          <TopBar />
          <div className='container mx-auto py-4'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
