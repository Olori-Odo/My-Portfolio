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
          <div id="link-1">
            <h6>Food Recipe</h6>
            <Link to=" http://dmrecipe.netlify.app">
              {" "}
              <img className="image" src={Food} alt="recipe" />{" "}
            </Link>
          </div>
          <img className="image" src={CRM} alt="ticketing" />
        </div>
      </div>
    </>
  );
};

export default Project;
