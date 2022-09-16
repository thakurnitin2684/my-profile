import React, { useState } from "react";
import "./stylesheets/About.css";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import * as assets from "../assets";
import { skillsData } from "../utils/DataFile";

function About() {
  return (
    <div class="container">
      <h2 id="about" className="sectionHeading">
        {assets.strings.txt_about_me}
      </h2>
      <Fade clear duration={2000}>
        <div className="myBioContainer">
          <p className="myBio">{assets.strings.txt_my_bio}</p>
        </div>
      </Fade>
      <p className="subHeading">{assets.strings.txt_skills}</p>

      <div>
        <h4 style={{ margin: "0px", color: "grey" }}>
          {assets.strings.txt_libraries}
        </h4>
      </div>

      <Fade>
        <div className="skills">
          {skillsData.technologies.map((item) => (
            <div className="each-skill">
              <p>{item.name}</p>
              {item.prof && (
                <p className="tagContainer">
                  <span className="tagTxt">prof.</span>
                </p>
              )}
            </div>
          ))}
        </div>
      </Fade>

      <div>
        <h4 style={{ margin: "0px", color: "grey" }}>
          {assets.strings.txt_languages}
        </h4>
      </div>

      <Fade>
        <div className="skills">
          {skillsData.languages.map((item) => (
            <div className="each-skill">
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </Fade>

      <div>
        <h4 style={{ margin: "0px", color: "grey" }}>
          {assets.strings.txt_dbms}
        </h4>
      </div>

      <Fade>
        <div className="skills">
          {skillsData.dbms.map((item) => (
            <div className="each-skill">
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </Fade>

      <div>
        <h4 style={{ margin: "0px", color: "grey" }}>
          {assets.strings.txt_other_mentions}
        </h4>
      </div>

      <Fade>
        <div className="skills">
          {skillsData.other.map((item) => (
            <div className="each-skill">
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}

export default About;
