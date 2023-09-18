import React from "react";
import "./Navbar.css";
const Navbar = (props) => {
  return (
    <div className="nav-cont">
      <h1 className="cont-head">I am a navbar and it is {props.header}</h1>
    </div>
  );
};

export default Navbar;
