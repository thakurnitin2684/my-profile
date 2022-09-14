import React, { useState } from "react";
import "./stylesheets/Projects.css";
import {
  ProjectGrid,
  AndroidProjectGrid,
  BasicProjectGrid,
} from "./ProjectGrid";

import { androidProjects, projects1, projects2 } from "../utils/DataFile";

import Zoom from "react-reveal/Zoom";
import * as assets from "../assets";

function Projects() {
  return (
    // <Zoom>
    <div class="projectInnerContainer">
      <h2 id="projects" className="sectionHeading">
        {assets.strings.txt_projects}
      </h2>
      <h2 className="subHeading">{assets.strings.txt_android_projects}</h2>

      <div className="androidGrid">
        {androidProjects &&
          androidProjects.map((x) => (
            <AndroidProjectGrid
              id={x.id}
              name={x.name}
              tags={x.tags}
              summary={x.summary}
              url1={x.url1}
              url2={x.url2}
              img={x.img}
              ss={x.ss}
              Overview={x.Overview}
            />
          ))}
      </div>

      <h2 className="subHeading">Other Projects</h2>

      <div className="grid">
        {projects1 &&
          projects1.map((x) => (
            <ProjectGrid
              id={x.id}
              name={x.name}
              tags={x.tags}
              summary={x.summary}
              url1={x.url1}
              url2={x.url2}
              img={x.img}
            />
          ))}
      </div>

      <h2 className="subHeading">Basic projects for learning </h2>

      <div className="basicGrid">
        {projects2 &&
          projects2.map((x) => (
            <BasicProjectGrid
              id={x.id}
              name={x.name}
              tags={x.tags}
              summary={x.summary}
              url1={x.url1}
              url2={x.url2}
              img={x.img}
            />
          ))}
      </div>
    </div>
    // </Zoom>
  );
}

export default Projects;
