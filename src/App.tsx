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
          <li>
            <a href="#home">
              <img src="src\assets\images\navbar_icons\home.svg" alt="Accueil" />
              <span className="text">Accueil</span>
            </a>
          </li>
          <li>
            <a href="#about-me">
              <img src="src\assets\images\navbar_icons\about-me.svg" alt="A propos de moi" />
              <span className="text">A propos de moi</span>
            </a>
          </li>
          <li>
            <a href="#projects-anchor">
              <img src="src\assets\images\navbar_icons\projects.svg" alt="Projets" />
              <span className="text">Projets</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <img src="src\assets\images\navbar_icons\contact.svg" alt="Contact" />
              <span className="text">Contact</span>
            </a>
          </li>
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
