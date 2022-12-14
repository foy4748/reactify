import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/Shared/MainLayout";

import Home from "../components/Home/Home";

import Post from "../components/Topics/Post";
import Topics from "../components/Topics/Topics";
import Checkout from "../components/Topics/Checkout";

import Blogs from "../components/Blogs/Blogs";

import FAQs from "../components/FAQs/FAQs";

import Login from "../components/AuthPages/Login";
import Register from "../components/AuthPages/Register";

import ErrorPage from "../components/Shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const routerObj = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/topics",
        element: <Topics />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/faqs",
        element: <FAQs />,
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
