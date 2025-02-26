import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
