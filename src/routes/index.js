import { BrowserRouter, Routes, Route } from "react-router-dom"
import UsersLogin from '../container/login-cards';
import SignIn from '../container/sign-in';
import SignUp from '../container/sign-up';
import { routes } from "../utils/config"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.usersCard} element={<UsersLogin />} />
                <Route path={routes.login} element={<SignIn />} />
                <Route path={routes.register} element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;