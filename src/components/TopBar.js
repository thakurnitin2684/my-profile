import React, { useState } from "react";
import "./stylesheets/TopBar.css";
import Fade from "react-reveal/Fade";

function TopBar() {
  const [currentChannel, setCurrentChannel] = useState("");

  function onItemClick(index) {
    setCurrentLink(index);
  }
  return (
    <Fade top>
      <div className="MainBoxTop">
        <li>
          <a
            href="#home"
            style={currentLink == 0 ? { color: "#D61A3C" } : null}
            onClick={() => onItemClick(0)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            style={currentLink == 1 ? { color: "#D61A3C" } : null}
            onClick={() => onItemClick(1)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            style={currentLink == 2 ? { color: "#D61A3C" } : null}
            onClick={() => onItemClick(2)}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#experience"
            style={currentLink == 3 ? { color: "#D61A3C" } : null}
            onClick={() => onItemClick(3)}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#courses"
            style={currentLink == 4 ? { color: "#D61A3C" } : null}
            onClick={() => onItemClick(4)}
          >
            Courses
          </a>
        </li>
        <li>
          <a
            href="#contact"
            style={currentLink == 5 ? { color: "#D61A3C" } : null}
            onClick={() => onItemClick(5)}
          >
            Contact
          </a>
        </li>
      </div>
    </Fade>
  );
}

export default TopBar;
