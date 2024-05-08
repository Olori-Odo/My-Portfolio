import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [projectOffer, setProjectOffer] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProjectOffer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(projectOffer);
  };

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
        <form action="/contact" method="post" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            value={projectOffer.name}
            onChange={handleChange}
            id="name"
          />
          <br />
          <label htmlFor="email">Email</label> <br />
          <input
            id="email"
            value={projectOffer.email}
            onChange={handleChange}
            type="email"
          />
          <br />
          <label htmlFor="subject">Subject</label> <br />
          <input
            type="text"
            value={projectOffer.subject}
            onChange={handleChange}
            id="subject"
          />
          <br />
          <label htmlFor="message">Message</label> <br />
          <textarea
            name="message"
            value={projectOffer.message}
            onChange={handleChange}
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
