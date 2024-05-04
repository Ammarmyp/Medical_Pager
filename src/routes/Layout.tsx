import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-[100vh]  w-full">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;
