import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";

import NotFound from "../pages/NotFound/NotFound";

import Home from "../pages/Home/Home";

import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
    ],
  },
]);
