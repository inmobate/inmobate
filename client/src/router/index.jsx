import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";

import NotFound from "../pages/NotFound";

import Landing from "../pages/Landing";

import Home from "../pages/Home";

import Detail from "../pages/Detail";

import PropertiesForm from "../pages/PropertiesForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/add",
        element: <PropertiesForm />,
      },
    ],
  },
]);
