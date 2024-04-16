import React from "react";
import { Outlet } from "react-router-dom";
import AuthProvider from "../provider/AuthProvider";

const ContextWrapper = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default ContextWrapper;
