import React, { useState, useEffect } from "react";
import "./stylesheets/ProjectGrid.css";
import useWindowDimensions from "../utils/UseWindowDimensions.js";
import * as assets from "../assets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export function ProjectGrid({ id, name, tags, summary, url1, url2, img }) {
  return (
    <Zoom>
      <div>
        <div className="grid-item">
          <div>
            <img className="card-img" src={img} alt="p_img" />
            <div className="card-content">
              <h1 className="card-header">{name}</h1>
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
              <p className="card-text">{summary}</p>
              <div
                style={{
                  width: "90%",
                  position: "absolute",
                  bottom: 15,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItem: "flex-end",
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
}

export function BasicProjectGrid({ id, name, tags, summary, url1, url2, img }) {
  const { height, width } = useWindowDimensions();
  const [isMobile, setMobile] = useState(width < 900);

  useEffect(() => {
    if (width < 900) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width]);

  return (
    <Zoom>
      {isMobile ? (
        <div>
          <div className="mbasic-item">
            <div>
              <div className="mobileBasicTop">
                <img className="mbasiccard-img" src={img} alt="p_img" />
                <div
                  style={{
                    flex: 1,
                    marginLeft: 5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItem: "center",
                  }}
                >
                  <button
                    className="basiccard-btn"
                    style={{
                      width: "80%",
                      margin: 3,
                      fontSize: 13,
                    }}
                    onClick={() => window.open(`${url1}`, "_blank")}
                  >
                    View <span>&rarr;</span>
                  </button>
                  <button
                    class="basiccard-btn"
                    style={{
                      width: "80%",
                      margin: 3,
                      fontSize: 13,
                    }}
                    onClick={() => window.open(`${url2}`, "_blank")}
                  >
                    Code <span>&lt;/&gt;</span>
                  </button>
                </div>
              </div>
              <div className="basiccard-content">
                <h1 className="basiccard-header">{name}</h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  {tags &&
                    tags.map((x) => (
                      <p className="basicproject-tag">
                        <span className="basictag-span">{x}</span>
                      </p>
                    ))}
                </div>
                <p className="basiccard-text">{summary}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="basic-item">
            <div>
              <img className="basiccard-img" src={img} alt="p_img" />
              <div className="basiccard-content">
                <h1 className="basiccard-header">{name}</h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  {tags &&
                    tags.map((x) => (
                      <p className="basicproject-tag">
                        <span className="basictag-span">{x}</span>
                      </p>
                    ))}
                </div>
                <p className="basiccard-text">{summary}</p>
                <div
                  style={{
                    width: "90%",
                    position: "absolute",
                    bottom: 15,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItem: "flex-end",
                  }}
                >
                  <button
                    className="basiccard-btn"
                    onClick={() => window.open(`${url1}`, "_blank")}
                  >
                    View <span>&rarr;</span>
                  </button>
                  <button
                    class="basiccard-btn"
                    onClick={() => window.open(`${url2}`, "_blank")}
                  >
                    Code <span>&lt;/&gt;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Zoom>
  );
}
export function AndroidProjectGrid({
  id,
  name,
  tags,
  summary,
  url1,
  url2,
  img,
  ss,
  Overview,
}) {
  const [isVisible, setVisible] = useState(false);

  const { height, width } = useWindowDimensions();
  const [isBtnViewVisible, setBtnViewVisible] = useState(width < 1000);

  useEffect(() => {
    if (width < 1000) {
      setBtnViewVisible(true);
    } else {
      setBtnViewVisible(false);
    }
  }, [width]);

  function onEnter() {
    setVisible(true);
  }
  function onExit() {
    setVisible(false);
  }

  return (
    <Fade duration={500}>
      <div>
        <div
          className="android-item"
          onMouseEnter={onEnter}
          onMouseLeave={onExit}
          style={
            isVisible && !isBtnViewVisible
              ? {
                  height: 400,
                  width: 400,
                }
              : null
          }
        >
          {!(!isBtnViewVisible && isVisible) ? (
            <>
              <div className="androidTopContainer">
                <img class="androidCard-img" src={img} alt="p_img" />
                <h1 className="androidCard-header">{name}</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                {tags &&
                  tags.map((x) => (
                    <p className="aproject-tag">
                      <span className="atag-span">{x}</span>
                    </p>
                  ))}
              </div>
              <p className="androidCard-text">{summary}</p>

              {isBtnViewVisible && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    className="androidCard-btn"
                    onClick={() => window.open(`${url1}`, "_blank")}
                  >
                    View <span>&rarr;</span>
                  </button>
                  <button
                    class="androidCard-btn"
                    onClick={() => window.open(`${url2}`, "_blank")}
                  >
                    Code <span>&lt;/&gt;</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div>
              <div className="androidTopContainer">
                <img className="androidCard-img" src={img} alt="p_img" />
                <div className="androidTopTextContainer">
                  <h1 className="androidCard-header">{name}</h1>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: 10,
                      marginLeft: 10,
                    }}
                  >
                    {tags &&
                      tags.map((x) => (
                        <p className="aproject-tag">
                          <span className="atag-span">{x}</span>
                        </p>
                      ))}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItem: "flex-end",
                    padding: 10,
                    width: "35%",
                    maxWidth: "35%",
                  }}
                >
                  <button
                    className="androidCard-btn"
                    style={{
                      width: "90%",
                      height: 30,
                      alignSelf: "flex-end",
                    }}
                    onClick={() => window.open(`${url1}`, "_blank")}
                  >
                    View <span>&rarr;</span>
                  </button>
                  <button
                    class="androidCard-btn"
                    style={{
                      width: "90%",
                      height: 30,
                      alignSelf: "flex-end",
                      marginTop: 10,
                    }}
                    onClick={() => window.open(`${url2}`, "_blank")}
                  >
                    Code <span>&lt;/&gt;</span>
                  </button>
                </div>
              </div>
              <div className="androidBottomContainer">
                <div className="androidBottomLeft">
                  <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    showIndicators={false}
                  >
                    {ss.map((item) => (
                      <div>
                        <img className="ssImg" src={item} alt="p_img" />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="androidBottomRight">
                  <p className="overViewHead">{assets.strings.txt_overview}</p>
                  <div>
                    {Overview.map((item) => (
                      <p className="overViewText">{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
