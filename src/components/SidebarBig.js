import React, { useState, useEffect } from "react";
import "./stylesheets/SidebarBig.css";
import Fade from "react-reveal/Fade";
import * as assets from "../assets";

//icons
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import LayersIcon from "@mui/icons-material/Layers";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

function SidebarBig() {
  const [currentLink, setCurrentLink] = useState(0);

  function onItemClick(index) {
    setCurrentLink(index);
  }

  return (
    <div className="MainBox">
      <Fade left>
        <ul>
          <li>
            <HomeIcon className="icon" fontSize="small" />
            <a
              href="#home"
              style={currentLink == 0 ? { color: "#D61A3C" } : null}
              onClick={() => onItemClick(0)}
            >
              Home
            </a>
          </li>
          <li>
            <PersonIcon className="icon" fontSize="small" />
            <a
              href="#about"
              style={currentLink == 1 ? { color: "#D61A3C" } : null}
              onClick={() => onItemClick(1)}
            >
              About
            </a>
          </li>
          <li>
            <LayersIcon className="icon" fontSize="small" />
            <a
              href="#projects"
              style={currentLink == 2 ? { color: "#D61A3C" } : null}
              onClick={() => onItemClick(2)}
            >
              Projects
            </a>
          </li>
          <li>
            <WorkOutlineOutlinedIcon className="icon" fontSize="small" />
            <a
              href="#experience"
              style={currentLink == 3 ? { color: "#D61A3C" } : null}
              onClick={() => onItemClick(3)}
            >
              Experience
            </a>
          </li>
          <li>
            <SchoolIcon className="icon" fontSize="small" />
            <a
              href="#courses"
              style={currentLink == 4 ? { color: "#D61A3C" } : null}
              onClick={() => onItemClick(4)}
            >
              Courses
            </a>
          </li>
          <li>
            <ContactsIcon className="icon" fontSize="small" />
            <a
              href="#contact"
              style={currentLink == 5 ? { color: "#D61A3C" } : null}
              onClick={() => onItemClick(5)}
            >
              Contact
            </a>
          </li>
        </ul>
      </Fade>
    </div>
  );
}

export default SidebarBig;
