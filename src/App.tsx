import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './assets/styles/App.css';

function App() {

  return (
    <div className="App">
      <nav className="sticky-nav">
        <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about-me">A propos de moi</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
};

export default App;
