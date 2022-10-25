import { Outlet } from "react-router-dom";
import UpNav from "./up-nav";

const Layout = () => {
  return (
    <>
      <UpNav />
      <Outlet />
    </>
  );
};

export default Layout;
