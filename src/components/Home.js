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
    <div id="home" className="homeContainer">
      <div className="wrapper">
        <div className="anim-circle">diaphragmatic animation</div>

        <div className="innerContent">
          <div className="ImgDiv">
            <Fade>
              <img
                className="profile-img"
                src={assets.images.profile}
                alt="profile_img"
              />
            </Fade>
          </div>

          <div className="labelContainer">
            <Fade bottom>
              <h1 className="Title">{assets.strings.txt_nitin_thakur}</h1>
              <h3 className="subTitle">
                I'm a{" "}
                <span className="seText">
                  {assets.strings.txt_software_eng}
                </span>
              </h3>
            </Fade>
          </div>

          <div className="linkContainer">
            <Fade duration={7000}>
              <div
                className="btn"
                onClick={() => handleButtonClick(assets.url.github)}
              >
                <img className="btnImg" src={assets.images.github} />
              </div>
            </Fade>
            <Fade duration={7000}>
              <div
                className="btn"
                onClick={() => handleButtonClick(assets.url.linkedIn)}
              >
                <img className="btnImg" src={assets.images.linkedIn} />
              </div>
            </Fade>
            <Fade duration={7000}>
              <div
                className="btn"
                onClick={() => handleButtonClick(assets.url.play_store)}
              >
                <img className="btnImg" src={assets.images.google_play} />
              </div>
            </Fade>
            <Fade duration={7000}>
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
            </Fade>
          </div>

          <div className="lowerBtnContainer">
            <Fade duration={3000}>
              <a href="#contact" className="btnLong">
                <p className="btnTxt">{assets.strings.txt_contact_me}</p>
              </a>
            </Fade>
            <Fade duration={3000}>
              <div
                className="btnLong"
                onClick={() => handleButtonClick(assets.url.cv)}
              >
                <p className="btnTxt">{assets.strings.txt_download_dv}</p>
              </div>
            </Fade>
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
