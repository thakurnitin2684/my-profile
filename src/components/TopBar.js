import React from "react";
import "./TopBar.css";
import Fade from "react-reveal/Fade";

const TopBar = () => {
  return (
    <Fade top>
      <div className="MainBox">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#projects">Projects</a>
        <a href="#">Skills</a>
        <a href="#">Contact</a>
      </div>
    </Fade>
  );
};

export default TopBar;
