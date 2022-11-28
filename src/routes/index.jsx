import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ChooseLogin from "../container/choose-login";
import SignIn from "../container/sign-in";
import SignUp from "../container/sign-up";
import Layout from "../layout";
import { memoryStrings, routes } from "../utils/config";
import { POAddProject, PODashboard, ProjectDetails, POProjects } from "../container/program-organizer";
import LayoutStudent from "../layout/layout-student";
import PSDashboard from "../container/students/dashboard";
import ShowProjects from "../container/students/projects";
import ApplyProjects from "../container/students/apply-projects";
import ProjectViewStudent from "../container/students/project-view-Student";
import TeamMembers from "../container/students/teams";
import Notifications from "../container/students/notifications";
import { slice as userSlice } from "../store/slices/user";
import jwt_decode from "jwt-decode";
import { sls } from "../utils";

const AppRoutes = ({ isAuthorized }) => {
  const dispatch = useDispatch();
  if (isAuthorized) {
    if (sls.decode(memoryStrings.authorization)) {
      let _user = jwt_decode(sls.decode(memoryStrings.authorization));
      dispatch(userSlice.actions.user(_user));
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={routes.usersCard} element={<ChooseLogin />} />
        <Route path={routes.login} element={<SignIn />} />
        <Route path={routes.register} element={<SignUp />} />
        <Route path='*' element={<Navigate to={routes.usersCard} />} />

        <Route element={<Layout />}>
          <Route path={routes.organizer.root} element={<PODashboard />} />
          <Route path={routes.organizer.projects} element={<POProjects />} />
          <Route path={routes.organizer.addProject} element={<POAddProject />} />
          <Route path={routes.organizer.projectDetails} element={<ProjectDetails />} />
          <Route path='*' element={<Navigate to={routes.organizer.root} />} />
        </Route>
        <Route element={<LayoutStudent />}>
          <Route path={routes.student.root} element={<PSDashboard />} />
          <Route path={routes.student.showProjects} element={<ShowProjects />} />
          <Route path={routes.student.applyProjects} element={<ApplyProjects />} />
          <Route path={routes.student.studentViewProjects} element={<ProjectViewStudent />} />
          <Route path={routes.student.teamMembers} element={<TeamMembers />} />
          <Route path={routes.student.notifications} element={<Notifications />} />
          <Route path='*' element={<Navigate to={routes.student.root} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
