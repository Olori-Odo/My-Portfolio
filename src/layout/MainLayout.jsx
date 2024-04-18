import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div id="layout">
      <div id="display">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
