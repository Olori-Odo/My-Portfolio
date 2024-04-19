import React from "react";
import { NavLink } from "react-router-dom";

const Links = ({ to, icon, children }) => {
  return (
    <NavLink to={to}>
      <div id="nav-links">
        <span> {icon} </span>
        <span> {children} </span>
      </div>
    </NavLink>
  );
};

export default Links;
