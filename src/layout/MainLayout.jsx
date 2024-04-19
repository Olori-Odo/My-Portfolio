import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/navigation/navbar/NavBar";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div id="layout">
      <NavBar />
      <div id="display">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
