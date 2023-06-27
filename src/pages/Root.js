import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./../ui/Layout";
import Dashboard from "./Dashboard";
import Business from "./Business";
import Analytics from "./Analytics";
import Service from "./Service";
import Settings from "./Settings";
import Help from "./Help";

const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "business",
          element: <Business />,
        },
        {
          path: "analytics",
          element: <Analytics />,
        },
        {
          path: "service",
          element: <Service />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "help",
          element: <Help />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Root;
