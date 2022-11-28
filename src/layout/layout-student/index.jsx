import { Outlet } from "react-router-dom";
import TopBar from "../top-bar";
import SideBarStudent from "./side-bar-student";

const LayoutStudent = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-no-wrap'>
        <SideBarStudent />
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

export default LayoutStudent;
