import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FindUs from "../components/FindUs"
import PrivateRoute from "./PrivateRoute";
// import ErrorPage from "../pages/ErrorPage";
import ErrorPage from '../pages/ErrorPage'
import Home from "../pages/Home";
import ServiceDetails from "../components/ServiceDetails";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("Counselor.json"),
        
      },
      {
        path: "/statistics",
        element:    <PrivateRoute>
        <FindUs></FindUs>
     </PrivateRoute> ,  
      },
      {
        path: "/blog",
        element:    <PrivateRoute>
        <Blog></Blog>
     </PrivateRoute>, 
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
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
