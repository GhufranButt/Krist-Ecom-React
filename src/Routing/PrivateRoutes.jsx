import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const storedCredentials = JSON.parse(localStorage.getItem("user"));
  const storedisLoggedIn = localStorage.getItem("isLoggedIn");
  if (!storedCredentials || !storedisLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (storedCredentials || storedisLoggedIn) {
    return (
      <>
        <Outlet />
      </>
    );
  }
};

export default PrivateRoutes;
