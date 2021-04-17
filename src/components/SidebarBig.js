import React from "react";
import "./SidebarBig.css";
import Fade from "react-reveal/Fade";

const SidebarBig = () => {
  return (
    <Fade left>
      <div className="MainBox">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </Fade>
  );
};

export default SidebarBig;
