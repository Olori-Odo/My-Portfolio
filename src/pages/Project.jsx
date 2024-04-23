import React from "react";
import "./Project.css";
import Food from "../assets/food.jpg";
import CRM from "../assets/crm.png";

const Project = () => {
  return (
    <>
      <div>
        <h1 id="p-header">Projects..</h1>

        <div id="projects">
          <img src={Food} alt="recipe" />
          <img src={CRM} alt="ticketing" />
        </div>
      </div>
    </>
  );
};

export default Project;
