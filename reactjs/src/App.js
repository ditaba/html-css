import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Sidebar, Home, Root } from "./pages";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/sidebar", element: <Sidebar /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
