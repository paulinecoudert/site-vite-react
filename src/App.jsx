import Main from "./components/Main";
import Sidenav from "./components/Sidenav";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTop from "./components/TopButton";
import Copyright from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <BackToTop />
      <Copyright />
    </div>
  );
}

export default App;
