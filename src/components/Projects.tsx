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
                <Project title="Interface d'administration" />
                <Project title="Restaurant Le Vingtième" />
                <Project title="Jeu de dé" />
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
    description: string;
}

function Project(props: ProjectProps) {
    return (
        <div className="project">
            <img src="\images\placeholder.png" />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
};

Project.defaultProps = {
    title: 'Titre',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

export default Projects;