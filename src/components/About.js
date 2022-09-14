import React, { useState } from "react";
import "./stylesheets/About.css";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import * as assets from "../assets";

const skillsData = {
  languages: [
    { name: "C/C++" },
    { name: "Kotlin" },
    { name: "Python" },
    { name: "HTML/CSS/JS" },
  ],

  technologies: [
    { name: "Android Development", prof: true },
    { name: "React.js", prof: false },
    { name: "React-Native", prof: false },
    { name: "Express.js", prof: false },
    { name: "jQuery", prof: false },
    { name: "Mongoose", prof: false },
  ],
  dbms: [{ name: "SQL" }, { name: "MongoDB" }, { name: "Firebase Firebase" }],

  other: [
    { name: "REST" },
    { name: "MVVM" },
    { name: "Firebase" },
    { name: "EJS" },
    { name: "Cloud Computing" },
  ],
};

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
        <h4 style={{ margin: "0px", color: "grey" }}>Libraries/Technologies</h4>
      </div>

      <Zoom>
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
      </Zoom>

      <div>
        <h4 style={{ margin: "0px", color: "grey" }}>Languages</h4>
      </div>

      <Zoom>
        <div className="skills">
          {skillsData.languages.map((item) => (
            <div className="each-skill">
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </Zoom>

      <div>
        <h4 style={{ margin: "0px", color: "grey" }}>DBMS</h4>
      </div>

      <Zoom>
        <div className="skills">
          {skillsData.dbms.map((item) => (
            <div className="each-skill">
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </Zoom>

      <div>
        <h4 style={{ margin: "0px", color: "grey" }}>Other mentions</h4>
      </div>

      <Zoom>
        <div className="skills">
          {skillsData.other.map((item) => (
            <div className="each-skill">
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </Zoom>
    </div>
  );
}

export default About;
