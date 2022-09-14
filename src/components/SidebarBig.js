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

function SidebarBig() {
  const [currentLink, setCurrentLink] = useState(0);

  function onItemClick(index) {
    setCurrentLink(index);
  }

  return (
    <Fade left>
      <div className="MainBox">
        <ul>
          <li>
            <PersonIcon className="icon" fontSize="small" />
            <a
              href="#about"
              style={currentLink == 0 ? { color: "#D61A3C" } : null}
              onClick={() => onItemClick(0)}
            >
              About
            </a>
          </li>
          <li>
            <LayersIcon className="icon" fontSize="small" />
            <a
              href="#projects"
              style={currentLink == 1 ? { color: "#D61A3C" } : null}
              onClick={() => onItemClick(1)}
            >
              Projects
            </a>
          </li>
          <li>
            <SchoolIcon className="icon" fontSize="small" />
            <a
              href="#skills"
              style={currentLink == 2 ? { color: "#D61A3C" } : null}
              onClick={() => onItemClick(2)}
            >
              Skills
            </a>
          </li>
          <li>
            <SettingsSuggestIcon className="icon" fontSize="small" />
            <a
              href="#skills"
              style={currentLink == 3 ? { color: "#D61A3C" } : null}
              onClick={() => onItemClick(3)}
            >
              Education
            </a>
          </li>
          <li>
            <ContactsIcon className="icon" fontSize="small" />
            <a
              href="#contact"
              style={currentLink == 4 ? { color: "#D61A3C" } : null}
              onClick={() => onItemClick(4)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </Fade>
  );
}

export default SidebarBig;
