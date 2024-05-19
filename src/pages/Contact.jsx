import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import NavBar from "../component/navigation/navbar/NavBar";

const Contact = () => {
  const [projectOffer, setProjectOffer] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    // const { name, value } = e.target;

    setProjectOffer((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(projectOffer);
    axios
      .post("http://localhost:3030/contact", { projectOffer })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div id="c-p">
      <NavBar />
      <div id="contact-page">
        <div id="contact-info">
          <h1 id="connect">LET'S CONNECT</h1>
          <p>
            Say hello at{" "}
            <span>
              <Link to="mailto:akinfatai04@gmail.com">
                akinfatai04@gmail.com
              </Link>
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
          <form action="/contact" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              value={projectOffer.name}
              onChange={handleChange}
              // id="name"
              name="name"
            />
            <br />
            <label htmlFor="email">Email</label> <br />
            <input
              name="email"
              value={projectOffer.email}
              onChange={handleChange}
              type="email"
              autoComplete="current-email"
            />
            <br />
            <label htmlFor="subject">Subject</label> <br />
            <input
              type="text"
              value={projectOffer.subject}
              onChange={handleChange}
              name="subject"
              // autoComplete="current-subject"
            />
            <br />
            <label htmlFor="message">Message</label> <br />
            <textarea
              name="message"
              value={projectOffer.message}
              onChange={handleChange}
              // id="message"
              cols="30"
              rows="10"
            ></textarea>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
