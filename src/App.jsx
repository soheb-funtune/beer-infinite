import { useContext, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import MyContext from "./components/context-api/MyContext";
import { RootRoute } from "./modules/root-route/RootRoute";
import Home from "./modules/home/Home";
import Login from "./modules/Login";

function App() {
  const { state } = useContext(MyContext);
  console.log("state:", state?.logedIn);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootRoute />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
