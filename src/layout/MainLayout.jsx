import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/navigation/navbar/NavBar";
import "./MainLayout.css";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Home from "../pages/Home";
import Project from "../pages/Project";

const MainLayout = () => {
  return (
    <div id="layout">
      <NavBar />
      <div id="display">
        <div id="below"></div>

        <Outlet />

        <About />
        <Project />
        <Skills />
      </div>
    </div>
  );
};

export default MainLayout;
