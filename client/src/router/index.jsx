import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";

import NotFound from "../pages/NotFound";

import Landing from "../pages/Landing";

import Home from "../pages/Home";

import Search from "../pages/Search";

import Filter from "../pages/Filter";

import FilterCombine from "../pages/FilterCombine";

import Detail from "../pages/Detail";

import PropertiesForm from "../pages/PropertiesForm/PropertiesForm";
import Step1 from "../pages/PropertiesForm/Step1";
import Step2 from "../pages/PropertiesForm/Step2";
import Step3 from "../pages/PropertiesForm/Step3";
import Step4 from "../pages/PropertiesForm/Step4";
import Step5 from "../pages/PropertiesForm/Step5";
import Step6 from "../pages/PropertiesForm/Step6";
import Step7 from "../pages/PropertiesForm/Step7";
import Step8 from "../pages/PropertiesForm/Step8";
import Step9 from "../pages/PropertiesForm/Step9";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
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
        path: "/search/:filter",
        element: <Search />,
      },
      {
        path: "/filter/:filter",
        element: <Filter />,
      },
      {
        path: "/filterCombine",
        element: <FilterCombine />,
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
      {
        path: "/addproperty/step7",
        element: <Step7 />,
      },
      {
        path: "/addproperty/step8",
        element: <Step8 />,
      },
      {
        path: "/addproperty/step9",
        element: <Step9 />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
