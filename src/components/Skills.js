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
            <p>#Android </p>
          </div>
          <div className="each-skill">
            <p>#Android </p>
          </div>
          <div className="each-skill">
            <p>#Android </p>
          </div>
          <div className="each-skill">
            <p>#Android </p>
          </div>
          <div className="each-skill">
            <p>#Android </p>
          </div>
          <div className="each-skill">
            <p>#Android </p>
          </div>
          <div className="each-skill">
            <p>#Android </p>
          </div>
        </div>
      </Zoom>

      <div>
        <h4 style={{ margin: "0px", color: "grey" }}>Other</h4>
      </div>
      <Zoom>
        <div className="skills">
          <div className="each-skill">
            <p>#Android </p>
          </div>
          <div className="each-skill">
            <p>#Android </p>
          </div>
          <div className="each-skill">
            <p>#Android </p>
          </div>
          <div className="each-skill">
            <p>#Android </p>
          </div>
          <div className="each-skill">
            <p>#Android </p>
          </div>
          <div className="each-skill">
            <p>#Android </p>
          </div>
          <div className="each-skill">
            <p>#Android </p>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Skills;
