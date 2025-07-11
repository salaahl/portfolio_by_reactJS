import React from "react";
import imgPlaceholder from "../assets/images/projects/placeholder.png";
import imgLocalLibrary from "../assets/images/projects/library.png";
import imgDiaShop from "../assets/images/projects/diashop_b.png";
import imgNutriVerif from "../assets/images/projects/nutriverif.png";
import imgJokes from "../assets/images/projects/jokes.png";
import imgQuizz from "../assets/images/projects/quizz.png";
import imgNotepad from "../assets/images/projects/notepad.png";
import imgRestaurant from "../assets/images/projects/restauration.png";
import imgDice from "../assets/images/projects/dice.png";
import imgAdministration from "../assets/images/projects/administration.png";
import imgCommerce from "../assets/images/projects/e_commerce.png";

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
          github="https://github.com/salaahl/diashop-app"
          website="https://diashop.onrender.com/"
        />
        <Project
          title="Restaurant Le Vingtième"
          image={imgRestaurant}
          description="Le Vingtième c'est la cuisine de toutes les gourmandises, alliant jus pressés minute de fruits et légumes & cocktails maison, recettes savoureuses..."
          stack={["HTML", "JS", "CSS", "PHP", "Symfony", "MySQL", "Bootstrap"]}
          github="https://github.com/salaahl/restaurant_project"
          website="https://levingtieme.onrender.com/"
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
          website="https://nutriverif.onrender.com/"
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
          website="https://bibliotheque-numerique.onrender.com/"
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
          website="https://blagues-et-sourires.onrender.com/"
        />
        <Project
          title="Quizz général"
          image={imgQuizz}
          description="Quizz général."
          stack={["HTML", "JS", "TypeScript", "CSS", "SASS", "Angular"]}
          github="https://github.com/salaahl/MyQuizz"
          website="http://quizz-general.onrender.com/"
        />
        <Project
          title="Bloc-notes"
          image={imgNotepad}
          description="Bloc-notes inspiré de Google Keep. Compte utilisateur disponible : sokhona.salaha@gmail.com, mdp : Sokhona."
          stack={["HTML (PUG)", "JS", "CSS", "Bulma", "MongoDB", "Mongoose"]}
          github="https://github.com/salaahl/notepad"
          website="https://bloc-notes.onrender.com/"
        />
        <Project
          title="Jeu de dés"
          image={imgDice}
          description="Jeu de dés."
          stack={["HTML", "JS", "CSS", "Bootstrap"]}
          github="https://replit.com/@SalahS/EXAM-jeu-STUDI"
          website="https://4448b68c-2aea-4a82-a2d6-c40f41b42fdf-00-35mrmwldw9yx6.worf.replit.dev/"
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
