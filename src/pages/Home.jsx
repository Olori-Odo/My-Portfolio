import React from "react";
import "./Home.css";
import Photo from "../assets/photo.png";

const Home = () => {
  return (
    <>
      <div id="homepage">
        <div id="intro">
          <p>Hi, I AM</p>
          <h2>FATAI AKINYEMI</h2>
          <p id="stack">A Mern-Stack Software Developer... </p>

          <div id="btn">
            <button>Get in Touch</button>
            <button>Resume</button>
          </div>
        </div>

        <div id="image">
          <img src={Photo} alt="my image" />
        </div>
      </div>
    </>
  );
};

export default Home;
