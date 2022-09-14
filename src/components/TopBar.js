import React, { useState } from "react";
import "./stylesheets/TopBar.css";
import Fade from "react-reveal/Fade";

function TopBar() {
  return (
    <Fade top>
      <div className="MainBox">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </Fade>
  );
}

export default TopBar;
