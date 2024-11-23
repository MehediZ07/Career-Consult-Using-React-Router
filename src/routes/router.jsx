import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

import PrivateRoute from "./PrivateRoute";

import ErrorPage from '../pages/ErrorPage'
import Home from "../pages/Home";
import ServiceDetails from "../components/ServiceDetails";
import Blog from "../pages/Blog";
import Statistics from "../pages/Statistics";
import MyProfile from "../pages/MyProfile";
import ReserPass from "../pages/ReserPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../Counselor.json"),
        
      },
      {
        path: "/statistics",
        element:    <PrivateRoute>
        <Statistics></Statistics>
     </PrivateRoute> , 
      loader: () => fetch("../Data.json"), 
      },
      {
        path: "/blog",
        element:    <PrivateRoute>
        <Blog></Blog>
     </PrivateRoute>, 
      },
      {
        path: "/profile",
        element:    
        <PrivateRoute>
         <MyProfile></MyProfile>
     </PrivateRoute>
     , 
      },
    ],
  },
  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <ServiceDetails></ServiceDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/resetpass",
        element: <ReserPass></ReserPass>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
