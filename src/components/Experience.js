import React, { useState } from "react";
import "./stylesheets/Experience.css";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import * as assets from "../assets";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { experienceData1, experienceData2 } from "../utils/DataFile";

function Experience() {
  return (
    <div className="experienceInnerContainer">
      <h2 id="experience" className="sectionHeading">
        {assets.strings.txt_experience}
      </h2>
      <div className="expBoxContainer">
        <Fade clear duration={2000}>
          <div className="expContainerLeft">
            {experienceData1.map((x) => (
              <div className="eachExpContainer">
                <div>
                  <WorkOutlineOutlinedIcon className="expIcon" />
                  <div class="verticalLine" />
                </div>
                <div className="eachExp">
                  <p className="expDurationTxt">{x.duration}</p>
                  <p className="expTitleTxt">{x.title}</p>
                  <p className="expDescripTxt">{x.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="expContainerRight">
            {experienceData2.map((x) => (
              <div className="eachExpContainer">
                <div>
                  <SchoolOutlinedIcon className="expIcon" />
                  <div class="verticalLine" />
                </div>
                <div className="eachExp">
                  <p className="expDurationTxt">{x.duration}</p>
                  <p className="expTitleTxt">{x.title}</p>
                  <p className="expDescripTxt">{x.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Experience;
