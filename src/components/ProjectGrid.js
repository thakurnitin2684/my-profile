import React from "react";
import IMG_PLACEHOLDER from "../images/profile.png";
import Zoom from "react-reveal/Zoom";

export const ProjectGrid = ({ id, name, url, skills }) => {
  return (
    <Zoom>
      <div>
        <div class="grid-item">
          <div>
            <img class="card-img" src={IMG_PLACEHOLDER} alt="Rome" />
            <div class="card-content">
              <h1 class="card-header">Rome</h1>
              <p class="card-text">
                Rome is known for its stunning <strong> architecture</strong>,
                with the Colleseum, Pantheon, and Trevi Fountain as the main
                attractions.
              </p>
              <button class="card-btn">
                Visit <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};
