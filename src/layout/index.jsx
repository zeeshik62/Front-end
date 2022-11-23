import { Outlet } from "react-router-dom";
import { memoryStrings, sls } from "../utils";
import jwt_decode from "jwt-decode";
import SideBar from "./side-bar";
import TopBar from "./top-bar";
import { useDispatch } from "react-redux";
import { slice as userSlice } from "../store/slices/user";
import { useEffect } from "react";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (sls.decode(memoryStrings.authorization)) {
      let _user = jwt_decode(sls.decode(memoryStrings.authorization));
      dispatch(userSlice.actions.user(_user));
    }
  }, []);

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
