import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import MyContext from "../../components/context-api/MyContext";
export const RootRoute = ({ children }) => {
  const { state } = useContext(MyContext);
  if (!state?.logedIn) {
    return <Navigate to="/login" replace />;
  } else {
    return <Outlet />;
  }
};
