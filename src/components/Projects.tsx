interface ProjectsProps {
    description: string;
    arrowUpText: string;
    arrowDownText: string;
}

function Projects(props: ProjectsProps) {
    return (
        <div id="projects">
            <a href="#about-me">
                <p>{props.arrowUpText}</p>
                <i className="arrow up"></i>
            </a>
            <div className="content">
                <Project 
                    title="Interface d'administration"
                    image="\images\administration.jpg"
                    description="Interface d'administration d'une franchise de sport. Identifiant administrateur : sokhona.salaha@gmail.com. Mot de passe : Sokhona."
                    github="https://github.com/salaahl/ECF"
                    website="https://interface-d-administration.herokuapp.com/login.html"
                />
                <Project
                    title="Restaurant Le Vingtième"
                    image="\images\restaurant.jpg"
                    description="Le Vingtième c'est la cuisine de toutes les gourmandises, alliant jus pressés minute de fruits et légumes & cocktails maison, recettes savoureuses..."
                    github="https://github.com/salaahl/restaurant_project"
                    website="https://restaurant-le-vingtieme.herokuapp.com/"
                />
                <Project 
                    title="Jeu de dés" 
                    image="\images\dice.jpg"
                    description="Jeu de dés developpé sous HTML, CSS et Javascript."
                    github="https://replit.com/@SalahS/EXAM-jeu-STUDI"
                    website="https://exam-jeu-studi.salahs.repl.co/"
                />
                <Project 
                    title="Site de e-commerce"
                    image="\images\e-commerce.jpg"
                    description="Trouvez le parfum parfait pour chaque occassion sur notre site de e-commerce de parfums."
                    github="https://github.com/salaahl/e-commerce-by-laravel"
                    website="https://salaha-sokhona-ecommerce.herokuapp.com/"
                />
            </div>
            <a href="#contact">
                <p>{props.arrowDownText}</p>
                <i className="arrow down"></i>
            </a>
        </div>
    );
}

Projects.defaultProps = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    arrowUpText: 'A propos de moi',
    arrowDownText: 'Contact'
};

interface ProjectProps {
    title: string;
    image: string;
    description: string;
    github: string;
    website: string;
}

function Project(props: ProjectProps) {
    return (
        <div className="project">
            <div className="content">
                <img src={props.image} />
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
            <div className="links">
                <a href={props.github} target="_blank">
                    <button className="button-18" role="button">Github</button>
                </a>
                <a href={props.website} target="_blank">
                    <button className="button-18" role="button">Site</button>
                </a>
            </div>
        </div>
    )
};

Project.defaultProps = {
    title: 'Titre',
    image: '\images\placeholder.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    github: '#',
    website: '#'
};

export default Projects;
