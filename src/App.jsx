import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        <span>© 2026 GURUPRAKASH Y</span>
        <span>GENERATIVE AI ENGINEER</span>
        <span>BUILT WITH REACT</span>
      </footer>
    </div>
  );
}

export default App;