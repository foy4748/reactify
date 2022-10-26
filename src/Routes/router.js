import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/MainLayout";
import Post from "../components/Post";
import Login from "../components/Login";
import Register from "../components/Register";
import Topics from "../components/Topics";
import Checkout from "../components/Checkout";

import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const routerObj = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/topics",
        element: <Topics />,
      },
      {
        path: "/post/:id",
        element: <Post />,
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
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routerObj);

export default router;
