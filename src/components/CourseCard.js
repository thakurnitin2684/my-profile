import React, { useState, useEffect } from "react";
import "./stylesheets/Courses.css";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import * as assets from "../assets";
import ArticleIcon from "@mui/icons-material/Article";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import useWindowDimensions from "../utils/UseWindowDimensions.js";

function CourseCard({ id, title, company, url, img }) {
  const [isVisible, setVisible] = useState(false);

  const { height, width } = useWindowDimensions();
  const [isMobileScreen, setMobileScreen] = useState(width < 900);

  useEffect(() => {
    if (width < 900) {
      setMobileScreen(true);
    } else {
      setMobileScreen(false);
    }
  }, [width]);

  function onEnter() {
    setVisible(true);
  }
  function onExit() {
    setVisible(false);
  }
  function onCourseClick() {
    window.open(`${url}`, "_blank");
  }
  return (
    <div
      className="courseCard"
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      onClick={onCourseClick}
    >
      <img className="courseImg" src={img} alt="p_img" />
      {(isMobileScreen || isVisible) && (
        <Fade>
          <div className="courseCardContent">
            <Fade top distance="10%">
              <div className="courseIconContainer">
                <div className="courseIconInnerContainer">
                  <ArticleIcon className="courseIcon" />
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <p className="courseCardTitle">{title}</p>
            </Fade>
            <Fade bottom>
              <p className="courseCardCompany">{company}</p>
            </Fade>
          </div>
        </Fade>
      )}
    </div>
  );
}

export default CourseCard;
