import React from "react";
import react from "../assets/react.png";
import Typescript from "../assets/typeScript.jpeg";
import Html from "../assets/Html-5.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/javascript.png";
import Nodejs from "../assets/node.png";
import Git from "../assets/git.png";
import Mongodb from "../assets/node-mongo.png";
import "./Skills.css";
import NavBar from "../component/navigation/navbar/NavBar";

const Skills = () => {
  return (
    <>
      <div id="exp-wrapper">
        <h1 id="exp">EXPERIENCE WITH:</h1>
        <div id="skills">
          <img className="skills-img" src={Html} alt="" />
          <img className="skills-img" src={Css} alt="" />
          <img className="skills-img" src={Javascript} alt="" />
          <img className="skills-img" src={Typescript} alt="" />
          <img className="skills-img" src={react} alt="" />
          <img className="skills-img" src={Nodejs} alt="" />
          <img className="skills-img" src={Git} alt="" />
          <img className="skills-img" src={Mongodb} alt="" />
        </div>
      </div>
    </>
  );
};

export default Skills;
