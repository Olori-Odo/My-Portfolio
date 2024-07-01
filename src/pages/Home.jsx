import React from "react";
import "./Home.css";
import Photo from "../assets/photo-1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-md-fluid" id="home-container">
        <div id="homepage">
          <div id="intro">
            <div id="name">
              <p>Hi, I AM</p>
              <h2>FATAI AKINYEMI</h2>
              <p id="stack">A Mern-Stack Software Developer... </p>
            </div>
            <div id="btn">
              <Link to={"/contact"}>
                <button className="btn btn-success">Get in Touch</button>
              </Link>

              <Link to={"https://flowcv.com/resume/7pdu725h3b "}>
                {" "}
                <button className="btn btn-info">Resume</button>{" "}
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
