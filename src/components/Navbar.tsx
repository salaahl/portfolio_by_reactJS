import homeIcon from "../assets/images/icons/home.svg";
import AboutMeIcon from "../assets/images/icons/about-me.svg";
import ServicesIcon from "../assets/images/icons/services.svg";
import projectsIcon from "../assets/images/icons/projects.svg";
import ContactIcon from "../assets/images/icons/contact.svg";

function Navbar() {
  return (
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
            <span className="text">Moi</span>
          </a>
        </li>
        <li>
          <a href="#services">
            <img src={ServicesIcon} alt="Services" />
            <span className="text">Services</span>
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
  );
}

export default Navbar;
