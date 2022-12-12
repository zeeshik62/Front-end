import { Outlet } from "react-router-dom";
import TopBar from "../top-bar";
import SideBarSupervisor from "./side-bar-supervisor";

const LayoutSupervisor = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-no-wrap'>
        <SideBarSupervisor />
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

export default LayoutSupervisor;
