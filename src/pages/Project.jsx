import React from "react";
import "./Project.css";
import Food from "../assets/food.jpg";
import CRM from "../assets/crm.png";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <div>
        <h1 id="p-header">Projects..</h1>

        <div id="projects">
          <label htmlFor="Food">FFood Recipe</label>
          <Link to=" http://dmrecipe.netlify.app">
            {" "}
            <img className="image" src={Food} alt="recipe" />{" "}
          </Link>
          <img className="image" src={CRM} alt="ticketing" />
        </div>
      </div>
    </>
  );
};

export default Project;
