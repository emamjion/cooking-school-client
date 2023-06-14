import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import AllClasses from "../Pages/Classes/AllClasses";
import DashboardLayout from "../Layout/DashboardLayout";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import PrivateRoutes from "./PrivateRoutes";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import InstructorHome from "../Pages/Dashboard/InstructorHome/InstructorHome";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/instructors',
                element: <Instructors/>
            },
            {
                path: '/classes',
                element: <AllClasses/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes> <DashboardLayout/> </PrivateRoutes>,
        children: [
            // admin
            {
                path: 'manage-users',
                element: <AdminRoute> <ManageUsers/> </AdminRoute>
            },
            // user
            {
                path: 'user-home',
                element: <UserHome/>
            },
            {
                path: 'selected-class',
                element: <SelectedClass/>
            },
            {
                path: 'enrolled-class',
                element: <EnrolledClass/>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory/>
            },
            // instructor route
            {
                path: 'add-class',
                element: <InstructorRoute> <AddClass/> </InstructorRoute>
            },
            {
                path: 'instructor-home',
                element: <InstructorRoute> <InstructorHome/> </InstructorRoute>
            },
            {
                path: 'my-classes',
                element: <InstructorRoute> <MyClass/> </InstructorRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
]);

export default router;
