interface AboutMeProps {
    title: string;
    description: string;
}

function AboutMe(props: AboutMeProps) {
    return (
        <section id="about-me">
            <div className="content">
                <h2>{props.title}<span>m</span><span>o</span><span>i</span></h2>
                <p>{props.description}</p>
            </div>
        </section>
    );
}

AboutMe.defaultProps = {
    title: 'à propos de ',
    description: 'Bienvenue sur mon portfolio. Je m\'appelle Salaha Sokhona, j\'ai 29 ans et je suis de Paris. Bibliothécaire passionné par l\'informatique et titulaire d\'un DUT informatique, j\'ai décidé de me lancer dans l\'aventure. J\'aime créer des projets innovants et me challenger en permanence. Mon expérience en bibliothèque m\'a appris l\'importance de l\'organisation et de la rigueur, des qualités que je mets à profit dans mon travail de développeur.',
};

export default AboutMe;
