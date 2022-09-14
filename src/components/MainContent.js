import React, { useState } from "react";
import "./stylesheets/MainContent.css";
import { ProjectGrid } from "./ProjectGrid";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Experience from "./Experience";
import Courses from "./Courses";

import { colors, strings, images } from "../assets/index.js";
function MainContent() {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div className="aboutContainer">
        <About />
      </div>
      <div className="projectContainer">
        <Projects />
      </div>
      <div className="experienceContainer">
        <Experience />
      </div>
      <div className="coursesContainer">
        <Courses />
      </div>

      <div className="contactContainer">
        <Contact />
      </div>
    </div>
  );
}
export default MainContent;
