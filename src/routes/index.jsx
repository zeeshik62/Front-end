import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseLogin from "../container/choose-login";
import SignIn from "../container/sign-in";
import SignUp from "../container/sign-up";
import Layout from "../layout";
import { routes } from "../utils/config";
import { slice as userSlice } from "../store/slices/user";
import { POAddProject, PODashboard, POProjects } from "../container/program-organizer";

const AppRoutes = ({ isAuthorized }) => {
  const dispatch = useDispatch();
  if (isAuthorized) {
    dispatch(userSlice.actions.user(isAuthorized));
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.usersCard} element={<ChooseLogin />} />
        <Route path={routes.login} element={<SignIn />} />
        <Route path={routes.register} element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path={routes.organizer.root} element={<PODashboard />} />
          <Route path={routes.organizer.projects} element={<POProjects />} />
          <Route path={routes.organizer.addProject} element={<POAddProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
