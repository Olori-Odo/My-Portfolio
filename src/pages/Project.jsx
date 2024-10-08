import React from "react";
import "./Project.css";
import Food from "../assets/food.jpg";
import CRM from "../assets/crm.png";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <div id="projects-wrap">
        <h1 id="p-header">PROJECTS:</h1>

        <div id="projects">
          <div id="link-1">
            <div>
              <Link to="https://dmrecipe.netlify.app/">
                {" "}
                <img className="image" src={Food} alt="recipe" />{" "}
              </Link>
              <span>
                <h2>Food Recipe</h2>
              </span>
            </div>
          </div>

          <div id="link-2">
            <Link to="https://diamondcrm-ticket.netlify.app">
              <img className="image" src={CRM} alt="ticketing" />
            </Link>
            <span>
              <h2>CRM Ticketing System</h2>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
