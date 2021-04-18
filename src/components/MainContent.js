import React from "react";
import "./MainContent.css";
import IMG_PLACEHOLDER from "../images/profile.png";
import { ProjectGrid } from "./ProjectGrid";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Skills from "./Skills";
import Contact from "./Contact";
const MainContent = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="ImgDiv">
          <Fade top>
            <img
              className="profile-img"
              src={IMG_PLACEHOLDER}
              alt="profile_img"
            />
          </Fade>
        </div>

        <div id="about" className="Title">
          <Fade bottom>
            <h2>Hi, I am Nitin Thakur</h2>
          </Fade>
        </div>
      </div>
      <Zoom>
        <p className="summary">
          Your summary is the one place you define yourself in your own words,
          free of start dates and titles. Whether you use it to put career
          choices in context, highlight your biggest achievements, or show off
          your personality, the summary is your chance to put your best self out
          there. It strengthens your first impression in a way no other profile
          section can.
        </p>
      </Zoom>
      <h2 id="projects" className="text-anim">
        Projects
      </h2>
      <Zoom>
        <div className="grid">
          {projects &&
            projects.map((x) => (
              <ProjectGrid
                id={x.id}
                url={x.url}
                name={x.name}
                skills={x.skills}
                summary={x.summary}
              />
            ))}
        </div>
      </Zoom>

      <div>
        <Skills />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Project 1",
    skills: ["HTML, CSS, JS"],
    summary:
      "Rome is known for its stunning  architecture with the Colleseum, Pantheon, and Trevi Fountain as the main attractions.",
    url: "https://github.com/thakurnitin2684",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Project 2",
    skills: ["HTML, CSS, JS"],
    summary:
      "Rome is known for its stunning  architecture with the Colleseum, Pantheon, and Trevi Fountain as the main attractions. the main attractions. the main attractions. the main attractions. the main attractions. the main attractions. the main attractions. the main attractions.",
    url: "https://github.com/thakurnitin2684",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Project 3",
    skills: ["HTML, CSS, JS"],
    summary: "Rome is known for its stunning  architecture with the Colleseum",
    url: "https://github.com/thakurnitin2684",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Project 4",
    skills: ["HTML, CSS, JS"],
    summary:
      "Rome is known for its stunning  architecture with the Colleseum, Pantheon, and Trevi Fountain as the main attractions.  Pantheon, and Trevi Fountain as the main attractions. Pantheon, and Trevi Fountain as the main attractions.",
    url: "https://github.com/thakurnitin2684",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Project 5",
    skills: ["HTML, CSS, JS"],
    summary:
      "Rome is known for its stunning  architecture with the Colleseum, Pantheon, and Trevi Fountain as the main attractions.",
    url: "https://github.com/thakurnitin2684",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Project 6",
    skills: ["HTML, CSS, JS"],
    summary:
      "Rome is known for its stunning  architecture with the Colleseum, Pantheon, and Trevi Fountain as the main attractions. architecture with the Colleseum, Pantheon, and Trevi Fountain as the main attractions.architecture with the Colleseum, Pantheon, and Trevi Fountain as the main attractions.architecture with the Colleseum, Pantheon, and Trevi Fountain as the main attractions.architecture with the Colleseum, Pantheon, and Trevi Fountain as the main attractions.architecture with the Colleseum, Pantheon, and Trevi Fountain as the main attractions.",
    url: "https://github.com/thakurnitin2684",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Project 6",
    skills: ["HTML, CSS, JS"],
    summary:
      "Rome is known for its stunning  architecture with the Colleseum, Pantheon, and Trevi Fountain as the main attractions.",
    url: "https://github.com/thakurnitin2684",
  },
];
export default MainContent;
