import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import homeIcon from './assets/images/icons/home.svg'
import AboutMeIcon from './assets/images/icons/about-me.svg'
import projectsIcon from './assets/images/icons/projects.svg'
import ContactIcon from './assets/images/icons/contact.svg'

import './assets/styles/App.css';

function App() {

  return (
    <div className="App">
      <header>
        <nav className="sticky-nav">
          <ul>
            <li>
              <a href="#home">
                <img src={homeIcon} alt="Accueil" />
                <span className="text">Accueil</span>
              </a>
            </li>
            <li>
              <a href="#about-me">
                <img src={AboutMeIcon} alt="A propos de moi" />
                <span className="text">A propos de moi</span>
              </a>
            </li>
            <li>
              <a href="#projects-anchor">
                <img src={projectsIcon} alt="Projets" />
                <span className="text">Projets</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <img src={ContactIcon} alt="Contact" />
                <span className="text">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
};

export default App;
