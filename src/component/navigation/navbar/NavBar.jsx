import React from "react";
import { PiDevToLogo } from "react-icons/pi";

const NavBar = () => {
  return (
    <div>
      <div id="logo">
        <PiDevToLogo />
        <h2>Akin_Dev</h2>
      </div>

      <div id="links"></div>
    </div>
  );
};

export default NavBar;
