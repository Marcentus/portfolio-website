import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

export default function Main() {
  return (
    <div className="main">
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
