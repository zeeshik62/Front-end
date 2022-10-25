import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseLogin from "../container/choose-login";
import UsersLogin from "../container/login-cards";
import SignIn from "../container/sign-in";
import SignUp from "../container/sign-up";
import Supervisor from "../container/supervisor-das";
import Layout from "../layout";
import { routes } from "../utils/config";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.usersCard} element={<ChooseLogin />} />
        {/* <Route path={routes.usersCard} element={<UsersLogin />} /> */}
        <Route path={routes.login} element={<SignIn />} />
        <Route path={routes.register} element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path={routes.supervisor} element={<Supervisor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
