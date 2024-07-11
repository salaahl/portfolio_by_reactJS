import React from 'react';
import imgPlaceholder from '../assets/images/placeholder.png'
import imgLocalLibrary from '../assets/images/local_library.jpg'
import imgDiaShop from '../assets/images/diashop_b.jpg'
import imgNutriVerif from '../assets/images/nutri_verif.jpg'
import imgQuizz from '../assets/images/quizz.jpg'
import imgNotepad from '../assets/images/notepad.jpg'
import imgRestaurant from '../assets/images/restaurant.jpg'
import imgDice from '../assets/images/dice.jpg'
import imgAdministration from '../assets/images/administration.jpg'
import imgCommerce from '../assets/images/e_commerce.jpg'

interface ProjectsProps {
    description: string;
}

const AsyncImage = (props: any) => {
    const [loadedSrc, setLoadedSrc] = React.useState(imgPlaceholder);
    React.useEffect(() => {
        setLoadedSrc(imgPlaceholder);
        if (props.src) {
            const handleLoad = () => {
                setLoadedSrc(props.src);
            };
            const image = new Image();
            image.addEventListener('load', handleLoad);
            image.src = props.src;
            return () => {
                image.removeEventListener('load', handleLoad);
            };
        }
    }, [props.src]);
    if (loadedSrc === props.src) {
        return (
            <img {...props} />
        );
    }
    return null;
};

function Projects(props: ProjectsProps) {
    return (
        <section id="projects">
            <div className="header">
                <h2>Projets</h2>
            </div>
            <div className="content">
                <nav>
                    <button id="slide-left">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                        </svg>
                    </button>
                </nav>
                <Project
                    title="Bibliothèque locale"
                    image={imgLocalLibrary}
                    description="Bibliothèque numérique de prêt sous python/Django. Compte utilisateur disponible : Ousmane, mdp : Ous75019"
                    stack="HTML, JS, CSS, Python, Postgres, Django, Bootstrap"
                    github="https://github.com/salaahl/library"
                    website="https://salaha-sokhona-library-6e6b0019ca6e.herokuapp.com/catalog/"
                />
                <Project
                    title="DiaShop-b"
                    image={imgDiaShop}
                    description="Les dernières tendances de la mode pour hommes et femmes."
                    stack="HTML, JS, CSS, PHP, MySQL, Laravel, Blade, Tailwind CSS"
                    github="https://github.com/salaahl/"
                    website="https://diashop-44ca2fd005dc.herokuapp.com/"
                />
                <Project
                    title="NutriVérif"
                    image={imgNutriVerif}
                    description="Application web de food checking alimentée par l'API d'OpenFactsFood. Sous Vue.js."
                    stack="HTML, JS, TypeScript, CSS, Tailwind, Pinia, Vue.js"
                    github="https://github.com/salaahl/nutri_verif_by_vue.js"
                    website="https://nutriverif-71662e666d39.herokuapp.com/"
                />
                <Project
                    title="Quizz"
                    image={imgQuizz}
                    description="Quizz général sous Angular."
                    stack="HTML, JS, TypeScript, CSS, SASS, Angular"
                    github="https://github.com/salaahl/MyQuizz"
                    website="https://salaha-sokhona-quizz-9443d49695cb.herokuapp.com/"
                />
                <Project
                    title="Bloc-notes"
                    image={imgNotepad}
                    description="Bloc-notes sous expressJS. Compte utilisateur disponible : sokhona.salaha@gmail.com, mdp : Sokhona"
                    stack="HTML (PUG), JS, CSS, Bulma, MongoDB, Mongoose"
                    github="https://github.com/salaahl/notepad"
                    website="https://salaha-sokhona-notepad-ed791a5cfd1e.herokuapp.com/login"
                />
                <Project
                    title="Restaurant Le Vingtième"
                    image={imgRestaurant}
                    description="Le Vingtième c'est la cuisine de toutes les gourmandises, alliant jus pressés minute de fruits et légumes & cocktails maison, recettes savoureuses..."
                    stack="HTML, JS, CSS, PHP, Symfony, MySQL, Bootstrap"
                    github="https://github.com/salaahl/restaurant_project"
                    website="https://restaurant-le-vingtieme.herokuapp.com/"
                />
                <Project
                    title="Jeu de dés"
                    image={imgDice}
                    description="Jeu de dés developpé sous HTML, CSS et Javascript."
                    stack="HTML, JS, CSS, Bootstrap"
                    github="https://replit.com/@SalahS/EXAM-jeu-STUDI"
                    website="https://exam-jeu-studi.salahs.repl.co/"
                />
                <Project
                    title="Interface d'administration"
                    image={imgAdministration}
                    description="Interface d'administration d'une franchise de sport. Identifiant administrateur : sokhona.salaha@gmail.com. Mot de passe : Sokhona."
                    stack="HTML, JS, CSS, PHP, MySQL, JQuery, Bootstrap"
                    github="https://github.com/salaahl/ECF"
                    website="https://interface-d-administration.herokuapp.com/login.html"
                />
                <Project
                    title="Site de e-commerce"
                    image={imgCommerce}
                    description="Trouvez le parfum parfait pour chaque occassion sur notre site de e-commerce de parfums."
                    stack="HTML, JS, CSS, PHP, MySQL, Laravel, Blade, Tailwind CSS"
                    github="https://github.com/salaahl/e-commerce-by-laravel"
                    website="https://salaha-sokhona-ecommerce.herokuapp.com/"
                />
                <nav>
                    <button id="slide-right">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                    </button>
                </nav>
            </div>
            <canvas className="background"></canvas>
        </section>
    );
}

Projects.defaultProps = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

interface ProjectProps {
    title: string;
    image: string;
    description: string;
    stack: string;
    github: string;
    website: string;
}

function Project(props: ProjectProps) {
    return (
        <article className="project">
            <section className="content">
                <AsyncImage src={props.image} />
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </section>
            <section className="stack">
                <h5>Stack technique :</h5>
                {props.stack}
            </section>
            <section className="links">
                <a href={props.github} target="_blank">
                    <button className="button-18" role="button">Github</button>
                </a>
                <a href={props.website} target="_blank">
                    <button className="button-18" role="button">Site</button>
                </a>
            </section>
        </article>
    )
};

Project.defaultProps = {
    title: 'Titre',
    image: '/images/placeholder.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    stack: '',
    github: '#',
    website: '#'
};

export default Projects;
