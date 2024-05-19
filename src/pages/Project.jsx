import React from "react";
import "./Project.css";
import Food from "../assets/food.jpg";
import CRM from "../assets/crm.png";
import { Link } from "react-router-dom";
import NavBar from "../component/navigation/navbar/NavBar";

const Project = () => {
  return (
    <>
      <div>
        <NavBar />
        <h1 id="p-header">PROJECTS:</h1>

        <div id="projects">
          <div id="link-1">
            <div>
              <Link to="https://dmrecipe.netlify.app/">
                {" "}
                <img className="image" src={Food} alt="recipe" />{" "}
              </Link>
              <span>
                <h1>Food Recipe</h1>
              </span>
            </div>
          </div>

          <div id="link-2">
            <Link to="https://diamondcrm-ticket.netlify.app">
              <img className="image" src={CRM} alt="ticketing" />
            </Link>
            <span>
              <h1>CRM Ticketing System</h1>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
