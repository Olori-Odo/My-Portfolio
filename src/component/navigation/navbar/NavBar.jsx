import React from "react";
import { FaHeadSideVirus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Links from "../links/Links";
import "./NavBar.css";

const Link = [
  { to: "/", id: 1, label: "Home", icon: <FaHome /> },
  { to: "/about", id: 2, label: "About" },
  { to: "/skills", id: 3, label: "Skills" },
  { to: "project", id: 4, label: "Project" },
  { to: "/contact", id: 5, label: "Contact" },
];

const NavBar = () => {
  return (
    <div id="main-nav">
      <div id="logo">
        <FaHeadSideVirus />
        <h3>Akin_Dev</h3>
      </div>

      <div id="links">
        {Link.map(({ to, label, id }) => (
          <Links to={to} key={id}>
            {" "}
            {label}{" "}
          </Links>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
