import React from "react";
import { PiDevToLogo } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import Links from "../links/Links";

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
        <PiDevToLogo />
        <h2>Akin_Dev</h2>
      </div>

      <div id="links">
        {Link.map(({ to, label }) => {
          <Links to={to} label={label} key={label} />;
        })}
      </div>
    </div>
  );
};

export default NavBar;
