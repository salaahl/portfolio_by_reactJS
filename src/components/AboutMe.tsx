interface AboutMeProps {
    title: string;
    description: string;
    arrowUpText: string;
    arrowDownText: string;
}

function AboutMe(props: AboutMeProps) {
    return (
        <section id="about-me">
            <nav>
                <a href="#home">
                    <p>{props.arrowUpText}</p>
                    <i className="arrow up"></i>
                </a>
            </nav>
            <div className="content">
                <h2>{props.title}<span>moi</span></h2>
                <p>{props.description}</p>
            </div>
            <nav>
                <a href="#projects">
                    <p>{props.arrowDownText}</p>
                    <i className="arrow down"></i>
                </a>
            </nav>
        </section>
    );
}

AboutMe.defaultProps = {
    title: 'A propos de ',
    description: 'Bienvenue sur mon portfolio. Je m\'appelle Salaha SOKHONA, j\'ai 29 ans et je suis de Paris. Bibliothécaire passionné par l\'informatique et titulaire d\'un bac + 2 en developpement web, j\'ai décidé de me lancer dans l\'aventure. J\'aime créer des projets innovants et me challenger en permanence. Mon expérience en bibliothèque m\'a appris l\'importance de l\'organisation et de la rigueur, des qualités que je mets à profit dans mon travail de développeur.',
    arrowUpText: 'Ecran d\'accueil',
    arrowDownText: 'Mes projets'
};

export default AboutMe;
