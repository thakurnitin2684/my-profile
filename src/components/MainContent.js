import React from "react";
import "./MainContent.css";
import IMG_PLACEHOLDER from "../images/profile.png";
import { ProjectGrid } from "./ProjectGrid";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Skills from "./Skills";
import Contact from "./Contact";
import SCREEN_TIME from "../images/screentime.png";
import ALARM from "../images/alarm.png";
import BOX_OFFICE from "../images/boxoffice.png";
import CODEFORCES from "../images/codeforces.png";
import MY_TASKS from "../images/mytasks.png";
import NAKSHA from "../images/naksha.png";
import STICK from "../images/stick.png";
import TTT from "../images/ttt.png";

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
          I am an Android Developer and enthusiastic to learn new technologies
          and have some knowledge in web development. Eager to work in a tech
          company. Looking forward to generate new ideas and work on some good
          ideas. Focused on being more and more efficient and have a B Tech.
          Degree in Computer Science and Engineering.
        </p>
      </Zoom>
      <h2 id="projects" className="text-anim" style={{ paddingTop: "80px" }}>
        Projects
      </h2>
      {/* <Zoom> */}
      <div className="grid">
        {projects &&
          projects.map((x) => (
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
      {/* </Zoom> */}

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
    id: "project1",
    name: "ScreenTime Rank",
    tags: ["Kotlin", "Firebase", "NoSQL"],
    summary:
      "An android app that will show you your rank in a group on basis of your screen time to help you monitor your screentime",
    url1:
      "https://play.google.com/store/apps/details?id=com.thakurnitin2684.screentimerank",
    url2: "https://github.com/thakurnitin2684/ScreenTimeRank",
    img: SCREEN_TIME,
  },
  {
    id: "project2",
    name: "My Tasks",
    tags: ["Android", "Sqlite", "Kotlin"],
    summary:
      "A Minimal Tasks planner app.Helps you to create tasks and reminds you about them through notifications.",
    url1:
      "https://play.google.com/store/apps/details?id=com.thakurnitin2684.mytasks",
    url2: "https://github.com/thakurnitin2684/MyTasks",
    img: MY_TASKS,
  },
  {
    id: "project3",
    name: "Codefoces.info",
    tags: ["Android", "Kotlin"],
    summary:
      "Android App fetches data from codeforces Api. Useful if you are a competitive coder on codeforces,",
    url1:
      "https://play.google.com/store/apps/details?id=com.thakurnitin2684.codeforces",
    url2: "https://github.com/thakurnitin2684/Codeforces.info",
    img: CODEFORCES,
  },
  {
    id: "project4",
    name: "TIC TAC TOE",
    tags: ["React.js", "Javascript", "SCSS"],
    summary: "Tic tac toe game made with react.js",
    url1: "http://thakurnitin2684ttt.surge.sh/",
    url2: "https://github.com/thakurnitin2684/tictactoe",
    img: TTT,
  },
  {
    id: "project7",
    name: "Naksha Home Decor",
    tags: ["Html", "CSS"],
    summary:
      "WebDevelopment Project. Static Business Website for Home Decor selling shop.",
    url1: "https://thakurnitin2684.github.io/nakshahomedecor/",
    url2: "https://github.com/thakurnitin2684/nakshahomedecor",
    img: NAKSHA,
  },
  {
    id: "project5",
    name: "Stick-Around",
    tags: ["Unity", "C#", "Game"],
    summary: "Minimal Game made with Unity Game development engine.",
    url1:
      "https://play.google.com/store/apps/details?id=com.thakurnitin.StickAround&hl=en",
    url2: "https://github.com/thakurnitin2684/Stick-Around",
    img: STICK,
  },
  {
    id: "project6",
    name: "Box-Office",
    tags: ["React.js", "Styled components"],
    summary:
      "React app that fethces data from TV MAZE Api about shows and actors",
    url1: "https://thakurnitin2684.github.io/box-office/#/",
    url2: "https://github.com/thakurnitin2684/box-office",
    img: BOX_OFFICE,
  },
  {
    id: "project8",
    name: "Alarm Clock",
    tags: ["Python", "Tkiner"],
    summary: "Python project- Alarm Clock Made using Tkinder GUI Toolkit",
    url1: "https://github.com/thakurnitin2684/Python-tkinter#python-tkinter",
    url2: "https://github.com/thakurnitin2684/Python-tkinter",
    img: ALARM,
  },
];
export default MainContent;
