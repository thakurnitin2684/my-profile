import React from "react";
import "./TopBar.css";
import Fade from "react-reveal/Fade";

const TopBar = () => {
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
};

export default TopBar;
