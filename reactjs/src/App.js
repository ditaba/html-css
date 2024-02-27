import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Sidebar, HomePage, RootPage } from "./pages";
import ErrorPage from "./pages/Error";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "sidebar", element: <Sidebar /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
