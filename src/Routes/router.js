import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/MainLayout";
import Post from "../components/Post";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPage from "../components/ErrorPage";

//Loaders
//const dishLoader = async () => {
//  return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a");
//};

const routerObj = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routerObj);

export default router;
