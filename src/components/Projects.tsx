import React from "react";
import imgPlaceholder from "../assets/images/placeholder.png";
import imgLocalLibrary from "../assets/images/library.png";
import imgDiaShop from "../assets/images/diashop_b.png";
import imgNutriVerif from "../assets/images/nutriverif.png";
import imgJokes from "../assets/images/jokes.png";
import imgQuizz from "../assets/images/quizz.png";
import imgNotepad from "../assets/images/notepad.png";
import imgRestaurant from "../assets/images/restauration.png";
import imgDice from "../assets/images/dice.png";
import imgAdministration from "../assets/images/administration.png";
import imgCommerce from "../assets/images/e_commerce.png";

const AsyncImage = ({ props = {} }: any) => {
  const [loadedSrc, setLoadedSrc] = React.useState(null);
  React.useEffect(() => {
    setLoadedSrc(null);
    if (props.src) {
      const handleLoad = () => {
        setLoadedSrc(props.src);
      };
      const image = new Image();
      image.addEventListener("load", handleLoad);
      image.src = props.src;
      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [props.src]);
  if (loadedSrc === props.src) {
    return <img {...props} />;
  }
  return null;
};

function Projects() {
  return (
    <section id="projects">
      <div className="header">
        <h2 id="projects-anchor">Projets</h2>
      </div>
      <div className="content">
        <Project
          title="Site de prêt à porter"
          image={imgDiaShop}
          description="Les dernières tendances de la mode pour hommes et femmes."
          stack={[
            "HTML",
            "JS",
            "CSS",
            "PHP",
            "MySQL",
            "Laravel",
            "Blade",
            "Stripe",
            "Tailwind CSS",
          ]}
          github="https://github.com/salaahl/"
          website="https://diashop-v2-282b96906b4a.herokuapp.com/"
        />
        <Project
          title="Restaurant Le Vingtième"
          image={imgRestaurant}
          description="Le Vingtième c'est la cuisine de toutes les gourmandises, alliant jus pressés minute de fruits et légumes & cocktails maison, recettes savoureuses..."
          stack={["HTML", "JS", "CSS", "PHP", "Symfony", "MySQL", "Bootstrap"]}
          github="https://github.com/salaahl/restaurant_project"
          website="https://restaurant-le-vingtieme.herokuapp.com/"
        />
        <Project
          title="Appli de food-checking"
          image={imgNutriVerif}
          description="Application web de food checking alimentée par l'API d'OpenFactsFood."
          stack={[
            "HTML",
            "JS",
            "TypeScript",
            "CSS",
            "Tailwind",
            "Pinia",
            "Vue.js",
          ]}
          github="https://github.com/salaahl/nutri_verif_by_vue.js"
          website="https://nutriverif-71662e666d39.herokuapp.com/"
        />
        <Project
          title="Bibliothèque numérique"
          image={imgLocalLibrary}
          description="Bibliothèque numérique de prêt. Compte utilisateur disponible : Ousmane, mdp : Ous75019."
          stack={[
            "HTML",
            "JS",
            "CSS",
            "Python",
            "PostgreSQL",
            "Django",
            "Bootstrap",
          ]}
          github="https://github.com/salaahl/library"
          website="https://salaha-sokhona-library-6e6b0019ca6e.herokuapp.com/catalog/"
        />
        <Project
          title="Blagues et sourires"
          image={imgJokes}
          description="Une application web amusante affichant des blagues aléatoires via une API personnalisée."
          stack={[
            "HTML",
            "JS",
            "TypeScript",
            "CSS",
            "Tailwind",
            "PHP",
            "Twig",
            "Symfony",
            "API Platform",
            "React",
          ]}
          github="https://github.com/salaahl/jokes_app_by_reactJS"
          website="https://salaha-sokhona-jokes-app-f2c846554a50.herokuapp.com/"
        />
        <Project
          title="Quizz général"
          image={imgQuizz}
          description="Quizz général."
          stack={["HTML", "JS", "TypeScript", "CSS", "SASS", "Angular"]}
          github="https://github.com/salaahl/MyQuizz"
          website="https://salaha-sokhona-quizz-9443d49695cb.herokuapp.com/"
        />
        <Project
          title="Bloc-notes"
          image={imgNotepad}
          description="Bloc-notes inspiré de Google Keep. Compte utilisateur disponible : sokhona.salaha@gmail.com, mdp : Sokhona."
          stack={["HTML (PUG)", "JS", "CSS", "Bulma", "MongoDB", "Mongoose"]}
          github="https://github.com/salaahl/notepad"
          website="https://salaha-sokhona-notepad-ed791a5cfd1e.herokuapp.com/login"
        />
        <Project
          title="Jeu de dés"
          image={imgDice}
          description="Jeu de dés."
          stack={["HTML", "JS", "CSS", "Bootstrap"]}
          github="https://replit.com/@SalahS/EXAM-jeu-STUDI"
          website="https://exam-jeu-studi.salahs.repl.co/"
        />
        <Project
          title="Interface d'administration"
          image={imgAdministration}
          description="Interface d'administration d'une marque de sport. Identifiant administrateur : sokhona.salaha@gmail.com. Mot de passe : Sokhona."
          stack={["HTML", "JS", "CSS", "PHP", "MySQL", "JQuery", "Bootstrap"]}
          github="https://github.com/salaahl/ECF"
          website="https://interface-d-administration.herokuapp.com/login.html"
        />
        <Project
          title="E-commerce de parfums"
          image={imgCommerce}
          description="Trouvez le parfum parfait pour chaque occassion sur notre site de e-commerce de parfums."
          stack={[
            "HTML",
            "JS",
            "CSS",
            "PHP",
            "MySQL",
            "Laravel",
            "Blade",
            "Tailwind CSS",
          ]}
          github="https://github.com/salaahl/e-commerce-by-laravel"
          website="https://salaha-sokhona-ecommerce.herokuapp.com/"
        />
      </div>
      <div className="background-transition">
        <svg
          id="visual"
          viewBox="0 0 1920 1080"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d="M0 950L45.7 959.3C91.3 968.7 182.7 987.3 274.2 992C365.7 996.7 457.3 987.3 548.8 978.8C640.3 970.3 731.7 962.7 823 959C914.3 955.3 1005.7 955.7 1097 953C1188.3 950.3 1279.7 944.7 1371.2 943.7C1462.7 942.7 1554.3 946.3 1645.8 951.3C1737.3 956.3 1828.7 962.7 1874.3 965.8L1920 969L1920 1081L1874.3 1081C1828.7 1081 1737.3 1081 1645.8 1081C1554.3 1081 1462.7 1081 1371.2 1081C1279.7 1081 1188.3 1081 1097 1081C1005.7 1081 914.3 1081 823 1081C731.7 1081 640.3 1081 548.8 1081C457.3 1081 365.7 1081 274.2 1081C182.7 1081 91.3 1081 45.7 1081L0 1081Z"
            fill="rgb(103, 175, 142, 0.6)"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
        <svg
          id="visual"
          viewBox="0 0 1920 1080"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d="M0 1031L45.7 1027.2C91.3 1023.3 182.7 1015.7 274.2 1014C365.7 1012.3 457.3 1016.7 548.8 1021.7C640.3 1026.7 731.7 1032.3 823 1033.2C914.3 1034 1005.7 1030 1097 1027C1188.3 1024 1279.7 1022 1371.2 1019.8C1462.7 1017.7 1554.3 1015.3 1645.8 1014.5C1737.3 1013.7 1828.7 1014.3 1874.3 1014.7L1920 1015L1920 1081L1874.3 1081C1828.7 1081 1737.3 1081 1645.8 1081C1554.3 1081 1462.7 1081 1371.2 1081C1279.7 1081 1188.3 1081 1097 1081C1005.7 1081 914.3 1081 823 1081C731.7 1081 640.3 1081 548.8 1081C457.3 1081 365.7 1081 274.2 1081C182.7 1081 91.3 1081 45.7 1081L0 1081Z"
            fill="rgb(103, 175, 142)"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
      </div>
    </section>
  );
}

interface ProjectProps {
  title: string;
  image: string;
  description: string;
  stack: string[];
  github: string;
  website: string;
}

function Project({
  title = "Titre",
  image = "/images/placeholder.png",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  stack = ["Non renseigné"],
  github = "#",
  website = "#",
}: ProjectProps) {
  return (
    <article className="project">
      <div className="inner">
        <section className="img-container">
          <img src={image} alt={title} />
        </section>
        <section className="masked-title">
          <h3>{title}</h3>
        </section>
      </div>
      <section className="description">
          <p>{description}</p>
          <div className="stack">
            {stack.map((element, index) => (
              <span key={index} className="language">
                {element}
              </span>
            ))}
          </div>
          <div className="links">
            <a href={github} className="button-style-1" target="_blank">
              <span className="button-style-1-content">Github</span>
            </a>
            <a href={website} className="button-style-1" target="_blank">
              <span className="button-style-1-content">Site web</span>
            </a>
          </div>
        </section>
    </article>
  );
}

export default Projects;
