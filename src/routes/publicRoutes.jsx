import { lazy } from "react";

import Success from "../views/Success";
const Login = lazy(() => import("../../src/views/auth/Login"));
const Register = lazy(() => import("../../src/views/auth/Register"));
const AdminLogin = lazy(() => import("../../src/views/auth/AdminLogin"));
const Home = lazy(() => import("../../src/views/Home"));

const UnAuthorized = lazy(() => import("../../src/views/UnAuthorized"));

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/unauthorized",
    element: <UnAuthorized />,
  },
  {
    path: "/success?",
    element: <Success />,
  },
];

export default publicRoutes;
