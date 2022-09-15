import React, { useState } from "react";
import "./App.css";
import SidebarBig from "./components/SidebarBig";
import TopBar from "./components/TopBar";
import Particles from "react-particles-js";
import MainContent from "./components/MainContent";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <div className="App">
      <div className="SidebarBig">
        <SidebarBig />
      </div>
      <Fade top>
        <div className="SidebarSmall">
          <TopBar />
        </div>
      </Fade>
      <div className="MainContentOuter">
        <div className="MainContentInner">
          <MainContent />
          <div>
            <Fade bottom>
              <div className="Cfooter">
                <p className="ftext">
                  Made by Nitin Thakur <span>&#169;</span>
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
