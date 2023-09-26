interface ProjectsProps {
    description: string;
    arrowUpText: string;
    arrowDownText: string;
}

function Projects(props: ProjectsProps) {
    return (
        <section id="projects">
            <nav>
                <a href="#about-me">
                    <p>{props.arrowUpText}</p>
                    <i className="arrow up"></i>
                </a>
            </nav>
            <div className="content">
                <Project 
                    title="Interface d'administration"
                    image="\images\administration.jpg"
                    description="Interface d'administration d'une franchise de sport. Identifiant administrateur : sokhona.salaha@gmail.com. Mot de passe : Sokhona."
                    stack="HTML, JS, CSS, PHP, MySQL, JQuery, Bootstrap"
                    github="https://github.com/salaahl/ECF"
                    website="https://interface-d-administration.herokuapp.com/login.html"
                />
                <Project
                    title="Restaurant Le Vingtième"
                    image="\images\restaurant.jpg"
                    description="Le Vingtième c'est la cuisine de toutes les gourmandises, alliant jus pressés minute de fruits et légumes & cocktails maison, recettes savoureuses..."
                    stack="HTML, JS, CSS, PHP, MySQL, Bootstrap"
                    github="https://github.com/salaahl/restaurant_project"
                    website="https://restaurant-le-vingtieme.herokuapp.com/"
                />
                <Project 
                    title="Jeu de dés" 
                    image="\images\dice.jpg"
                    description="Jeu de dés developpé sous HTML, CSS et Javascript."
                    stack="HTML, JS, CSS, Bootstrap"
                    github="https://replit.com/@SalahS/EXAM-jeu-STUDI"
                    website="https://exam-jeu-studi.salahs.repl.co/"
                />
                <Project 
                    title="Site de e-commerce"
                    image="\images\e-commerce.jpg"
                    description="Trouvez le parfum parfait pour chaque occassion sur notre site de e-commerce de parfums."
                    stack="HTML, JS, CSS, PHP, MySQL, Laravel, Blade, Tailwind CSS"
                    github="https://github.com/salaahl/e-commerce-by-laravel"
                    website="https://salaha-sokhona-ecommerce.herokuapp.com/"
                />
                <Project 
                    title="Bibliothèque locale"
                    image="\images\books.jpg"
                    description="Bibliothèque numérique de prêt sous python/Django. Compte utilisateur disponible : Ousmane, mdp : Ous75019"
                    stack="HTML, JS, CSS, Python, Postgres, Django, Bootstrap"
                    github="https://github.com/salaahl/library"
                    website="https://salaha-sokhona-library-6e6b0019ca6e.herokuapp.com/catalog/"
                />
                <Project 
                    title="Quizz"
                    image="\images\quizz.jpg"
                    description="Quizz général sous Angular."
                    stack="HTML, JS, TypeScript, CSS, SASS, Angular"
                    github="https://github.com/salaahl/MyQuizz"
                    website="https://salaha-sokhona-quizz-9443d49695cb.herokuapp.com/"
                />
                <Project 
                    title="Bloc-notes"
                    image="\images\notepad.jpg"
                    description="Bloc-notes sous expressJS. Compte utilisateur disponible : sokhona.salaha@gmail.com, mdp : Sokhona"
                    stack="HTML (PUG), JS, CSS, Bulma, MongoDB, Mongoose"
                    github="https://github.com/salaahl/notepad"
                    website="https://salaha-sokhona-notepad-ed791a5cfd1e.herokuapp.com/login"
                />
            </div>
            <nav>
                <a href="#contact">
                    <p>{props.arrowDownText}</p>
                    <i className="arrow down"></i>
                </a>
            </nav>
        </section>
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
    stack: string;
    github: string;
    website: string;
}

function Project(props: ProjectProps) {
    return (
        <article className="project">
            <section className="content">
                <img src={props.image} />
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
