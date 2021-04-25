import React from "react";
import Zoom from "react-reveal/Zoom";

export const ProjectGrid = ({ id, name, tags, summary, url1, url2, img }) => {
  return (
    <Zoom>
      <div>
        <div class="grid-item">
          <div>
            <img class="card-img" src={img} alt="p_img" />
            <div class="card-content">
              <h1 class="card-header">{name}</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {tags &&
                  tags.map((x) => (
                    <p className="project-tag">
                      <span className="tag-span">{x}</span>
                    </p>
                  ))}
              </div>
              <p class="card-text">{summary}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <button
                  className="card-btn"
                  onClick={() => window.open(`${url1}`, "_blank")}
                >
                  View <span>&rarr;</span>
                </button>
                <button
                  class="card-btn"
                  onClick={() => window.open(`${url2}`, "_blank")}
                >
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
