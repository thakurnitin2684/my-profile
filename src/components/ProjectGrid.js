import React from "react";
import IMG_PLACEHOLDER from "../images/profile.png";
import Zoom from "react-reveal/Zoom";
import SCREEN_TIME from "../images/screentime.png";

export const ProjectGrid = ({ id, name, url, skills, summary }) => {
  return (
    <Zoom>
      <div>
        <div class="grid-item">
          <div>
            <img class="card-img" src={SCREEN_TIME} alt="Rome" />
            <div class="card-content">
              <h1 class="card-header">Rome</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <p className="project-tag">
                  <span className="tag-span">Kotlin</span>
                </p>
                <p className="project-tag">
                  <span className="tag-span">Kotlin</span>
                </p>
                <p className="project-tag">
                  <span className="tag-span">Kotlin</span>
                </p>
              </div>
              <p class="card-text">{summary}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <button class="card-btn">
                  View <span>&rarr;</span>
                </button>
                <button class="card-btn">
                  Code <span>&lt;/&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};
