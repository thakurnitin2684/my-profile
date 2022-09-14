import React, { useState } from "react";
import "./stylesheets/Home.css";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import * as assets from "../assets";

function Home() {
  const handleButtonClick = (url) => {
    var win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <div className="homeContainer">
      <div className="wrapper">
        <div className="anim-circle">diaphragmatic animation</div>

        <div className="innerContent">
          <div className="ImgDiv">
            <Fade top>
              <img
                className="profile-img"
                src={assets.images.profile}
                alt="profile_img"
              />
            </Fade>
          </div>

          <div className="labelContainer">
            <Fade bottom>
              <h1 className="Title">Nitin Thakur</h1>
              <h3 className="subTitle">
                I'm a <span className="seText">Software Engineer </span>
              </h3>
            </Fade>
          </div>

          <div className="linkContainer">
            <div
              className="btn"
              onClick={() => handleButtonClick(assets.url.github)}
            >
              <img className="btnImg" src={assets.images.github} />
            </div>

            <div
              className="btn"
              onClick={() => handleButtonClick(assets.url.linkedIn)}
            >
              <img className="btnImg" src={assets.images.linkedIn} />
            </div>

            <div
              className="btn"
              onClick={() => handleButtonClick(assets.url.play_store)}
            >
              <img className="btnImg" src={assets.images.google_play} />
            </div>

            <div
              className="btn"
              onClick={() => handleButtonClick(assets.url.gfg)}
            >
              <img
                className="btnImg"
                src={assets.images.gfg}
                style={{ height: 30, paddingTop: 5, paddingBottom: 5 }}
              />
            </div>
          </div>

          <div className="lowerBtnContainer">
            <div
              className="btnLong"
              // onClick={() => handleButtonClick(assets.url.play_store)}
            >
              <p className="btnTxt">{assets.strings.txt_contact_me}</p>
            </div>
            <div
              className="btnLong"
              // onClick={() => handleButtonClick(assets.url.play_store)}
            >
              <p className="btnTxt">{assets.strings.txt_download_dv}</p>
            </div>
          </div>
        </div>

        <div class="scroll-downs">
          <p class="scrollText">{assets.strings.txt_scroll_down}</p>
          <div class="mousey">
            <div class="scroller"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
