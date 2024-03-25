import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { HomePage, RootPage, SidebarPage, CVPage } from "./pages";
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
      { path: "sidebar", element: <SidebarPage /> },
      { path: "cv", element: <CVPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
