import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Sidebar } from "./pages";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world</div>,
  },
  { path: "/sidebar", element: <Sidebar /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
