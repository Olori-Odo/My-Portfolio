import React from "react";
import "./Home.css";
import Photo from "../assets/photo-1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="home-container">
        <div id="homepage">
          <div id="intro">
            <p>Hi, I AM</p>
            <h2>FATAI AKINYEMI</h2>
            <p id="stack">A Mern-Stack Software Developer... </p>

            <div id="btn">
              <Link to={"/contact"}>
                <button>Get in Touch</button>
              </Link>

              <Link to={"https://flowcv.com/resume/7pdu725h3b "}>
                {" "}
                <button>Resume</button>{" "}
              </Link>
            </div>
          </div>

          <div id="image">
            <img id="photo" src={Photo} alt="my image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
