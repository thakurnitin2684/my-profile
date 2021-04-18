import "./App.css";
import SidebarBig from "./components/SidebarBig";
import TopBar from "./components/TopBar";
import Particles from "react-particles-js";
import ParticleConfig from "./config/particle-config";
import MainContent from "./components/MainContent";
import Fade from "react-reveal/Fade";

const App = () => {
  return (
    <div className="App">
      <Fade left>
        <div className="SidebarBig">
          <SidebarBig />
        </div>
      </Fade>
      <div className="SidebarSmall">
        <TopBar />
      </div>
      <div className="MainContentOuter">
        <div className="partBg">
          <Particles
            height="100%"
            width="100%"
            params={ParticleConfig}
          ></Particles>
        </div>
        <div className="MainContentInner">
          <MainContent />
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
  );
};

export default App;
