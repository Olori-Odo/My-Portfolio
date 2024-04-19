import React from "react";

const Links = ({ to, icon, label }) => {
  return (
    <Navlink to={to}>
      <span> {icon} </span>
      <span> {label} </span>
    </Navlink>
  );
};

export default Links;
