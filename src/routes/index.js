import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HodDas from '../container/hod-das';
import UsersLogin from '../container/login-cards';
import OrganizerDas from '../container/organizer-das';
import SignIn from '../container/sign-in';
import SignUp from '../container/sign-up';
import StudentDas from '../container/student-das';
import SupervisorDas from '../container/supervisor-das';
import Layout from '../layout';
import { routes } from "../utils/config"
import ProtectedRoutes from "./protected-routes"

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route element={
                        // <ProtectedRoutes>
                        <Layout />
                        // </ProtectedRoutes>
                    }>
                        <Route path={routes.supervisor} element={<SupervisorDas />} />
                        <Route path={routes.student} element={<StudentDas />} />
                        <Route path={routes.organizer} element={<OrganizerDas />} />
                        <Route path={routes.hod} element={<HodDas />} />

                    </Route>
                    <Route path={routes.usersCard} element={<UsersLogin />} />
                    <Route path={routes.login} element={<SignIn />} />
                    <Route path={routes.register} element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;