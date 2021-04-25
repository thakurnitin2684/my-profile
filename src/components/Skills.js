import React from "react";
import "./Skills.css";
import Zoom from "react-reveal/Zoom";

const Skills = () => {
  return (
    <div>
      <h2 id="skills" className="text-anim" style={{ paddingTop: "80px" }}>
        Skills
      </h2>
      <div>
        <h4 style={{ margin: "0px", color: "grey" }}>Proficient</h4>
      </div>
      <Zoom>
        <div className="skills">
          <div className="each-skill">
            <p>
              #Android Development <sup>[Prof]</sup>
            </p>
          </div>
          <div className="each-skill">
            <p>C/C++ </p>
          </div>
          <div className="each-skill">
            <p>#Python </p>
          </div>
          <div className="each-skill">
            <p>#Kotlin </p>
          </div>
          <div className="each-skill">
            <p>#SQL </p>
          </div>
          <div className="each-skill">
            <p>#NoSQL(Firestore) </p>
          </div>
          <div className="each-skill">
            <p>#Firebase </p>
          </div>
        </div>
      </Zoom>

      <div>
        <h4 style={{ margin: "0px", color: "grey" }}>Other</h4>
      </div>
      <Zoom>
        <div className="skills">
          <div className="each-skill">
            <p>#React </p>
          </div>
          <div className="each-skill">
            <p>#HTML </p>
          </div>
          <div className="each-skill">
            <p>#CSS </p>
          </div>
          <div className="each-skill">
            <p>#Cloud computing </p>
          </div>
          <div className="each-skill">
            <p>#React-Native </p>
          </div>
          <div className="each-skill">
            <p>#javascript </p>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Skills;
