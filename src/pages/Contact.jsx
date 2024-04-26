import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact-page">
      <div id="contact-info">
        <h1 id="connect">LET'S CONNECT</h1>
        <p>
          Say hello at{" "}
          <span>
            <Link to="mailto:akinfatai04@gmail.com">akinfatai04@gmail.com</Link>
          </span>{" "}
        </p>

        <div id="contact-link">
          <Link>
            <FaGithub />
          </Link>

          <Link>
            {" "}
            <IoLogoLinkedin />{" "}
          </Link>

          <Link to=" https://twitter.com/Akinyemifataio">
            {" "}
            <FaXTwitter />{" "}
          </Link>
        </div>
      </div>

      <div id="form">
        <form action="">
          <label htmlFor="name">Name</label> <br />
          <input type="text" id="name" />
          <br />
          <label id="email" htmlFor="email">
            Email
          </label>{" "}
          <br />
          <input id="email" type="email" />
          <br />
          <label htmlFor="subject">Subject</label> <br />
          <input type="text" id="subject" />
          <br />
          <label htmlFor="message">Message</label> <br />
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
