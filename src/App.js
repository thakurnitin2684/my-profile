import "./App.css";
import SidebarBig from "./components/SidebarBig";
import TopBar from "./components/TopBar";
import Particles from "react-particles-js";
import ParticleConfig from "./config/particle-config";
import MainContent from "./components/MainContent";
const App = () => {
  return (
    <div className="App">
      <div className="SidebarBig">
        <SidebarBig />
      </div>

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
        </div>
      </div>
    </div>
  );
};

export default App;
