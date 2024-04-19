import React from "react";
import react from "../assets/react.png";
import Typescript from "../assets/typeScript.jpeg";
import Html from "../assets/Html-5.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/javascript.png";
import Nodejs from "../assets/node.png";
import Git from "../assets/git.png";
import Mongodb from "../assets/nodemon.png";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div id="exp-wrapper">
        <h1 id="exp">EXPERIENCE WITH:</h1>
        <div id="skills">
          <img src={Html} alt="" />
          <img src={Css} alt="" />
          <img src={Javascript} alt="" />
          <img src={Typescript} alt="" />
          <img src={react} alt="" />
          <img src={Nodejs} alt="" />
          <img src={Git} alt="" />
          <img src={Mongodb} alt="" />
        </div>
      </div>
    </>
  );
};

export default Skills;
