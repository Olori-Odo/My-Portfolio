import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about-page">
      <div id="about">
        <h1>ABOUT ME</h1>
      </div>

      <div id="about-note">
        <div id="ab-grid">
          <p id="about-p">
            Fatai is a Software Developer looking for exciting opportunities.{" "}
            <br />
            Designs for every category of websites whether it be an online
            eCommerce store, <br />
            an event page or even a product landing page.
            <br />
            <span id="span">
              Has Criminology and Technical Background. <br /> Likes to focus on
              accesibility while developing. <br />
              Passionate and curious about solving problems, <br />
              Currently exploring mongoDb and open to learn more.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
