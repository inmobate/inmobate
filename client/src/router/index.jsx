import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";

import NotFound from "../pages/NotFound";

import Landing from "../pages/Landing";

import Home from "../pages/Home";

import Detail from "../pages/Detail";

import PropertiesForm from "../pages/PropertiesForm/PropertiesForm";
import Step1 from "../pages/PropertiesForm/Step1";
import Step2 from "../pages/PropertiesForm/Step2";
import Step3 from "../pages/PropertiesForm/Step3";
import Step4 from "../pages/PropertiesForm/Step4";
import Step5 from "../pages/PropertiesForm/Step5";
import Step6 from "../pages/PropertiesForm/Step6";

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
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/addproperty",
        element: <PropertiesForm />,
      },
      {
        path: "/addproperty/step1",
        element: <Step1 />,
      },
      {
        path: "/addproperty/step2",
        element: <Step2 />,
      },
      {
        path: "/addproperty/step3",
        element: <Step3 />,
      },
      {
        path: "/addproperty/step4",
        element: <Step4 />,
      },
      {
        path: "/addproperty/step5",
        element: <Step5 />,
      },
      {
        path: "/addproperty/step6",
        element: <Step6 />,
      },
    ],
  },
]);
