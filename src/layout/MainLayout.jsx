import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/navigation/navbar/NavBar";
import "./MainLayout.css";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
// const Bootstrap = require("bootstrap");

const MainLayout = () => {
  return (
    <div id="layout" className="container">
      {/* <NavBar /> */}
      <div className="row">
        <div className="col" id="display">
          <NavBar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
