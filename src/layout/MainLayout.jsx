import React from "react";
import { Outlet } from "react-router-dom";

import "./MainLayout.css";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const MainLayout = () => {
  return (
    <div id="layout" className="container-fluid ">
      {/* <div className="col" id="display">
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />

          <Outlet />
        </div> */}
    </div>
  );
};

export default MainLayout;
