import React from "react";
import { FaHome } from "react-icons/fa";
import Links from "../links/Links";
import "./NavBar.css";

const Link = [
  { to: "/", id: 1 },
  { to: "/home", id: 2, label: "Home", icon: <FaHome /> },
  { to: "/about", id: 3, label: "About" },
  { to: "/skills", id: 4, label: "Skills" },
  { to: "/project", id: 5, label: "Project" },
  { to: "/contact", id: 6, label: "Contact" },
];

const NavBar = () => {
  return (
    <nav>
      <div className="mx-5" id="logo">
        {/* <FaHeadSideVirus className=" w-50" />
        <h3>Akin_Dev</h3> */}
        <img src="" alt="akindev logo" />
      </div>

      <div id="links">
        {Link.map(({ to, label, id }) => (
          <Links to={to} key={id}>
            {" "}
            {label}{" "}
          </Links>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
