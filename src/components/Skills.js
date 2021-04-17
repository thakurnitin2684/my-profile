import React from "react";
import "./Skills.css";
import Zoom from "react-reveal/Zoom";

const Skills = () => {
  return (
    <div>
      <h2 id="skills" className="text-anim">
        Skills
      </h2>
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
    </div>
  );
};

export default Skills;
