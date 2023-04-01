interface AboutMeProps {
    title: string;
    description: string;
    arrowUpText: string;
    arrowDownText: string;
}

function AboutMe(props: AboutMeProps) {
    return (
        <div id="about-me">
            <a href="#home">
                <p>{props.arrowUpText}</p>
                <i className="arrow up"></i>
            </a>
            <div className="content">
                <h2>{props.title}<span>moi</span></h2>
                <p>{props.description}</p>
            </div>
            <a href="#projects">
                <p>{props.arrowDownText}</p>
                <i className="arrow down"></i>
            </a>
        </div>
    );
}

AboutMe.defaultProps = {
    title: 'A propos de ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    arrowUpText: 'Ecran d\'accueil',
    arrowDownText: 'Mes projets'
};

export default AboutMe;