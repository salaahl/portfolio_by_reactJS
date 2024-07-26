interface AboutMeProps {
    description: string;
}

function AboutMe(props: AboutMeProps) {
    return (
        <section id="about-me">
            <div className="content">
                <h2><span>à</span><span>propos</span><span>de</span><span>moi</span></h2>
                <p>{props.description}</p>
            </div>
        </section>
    );
}

AboutMe.defaultProps = {
    description: 'Bienvenue sur mon portfolio. Je m\'appelle Salaha Sokhona, j\'ai 30 ans et je suis de Paris. Bibliothécaire passionné par l\'informatique et titulaire d\'un DUT informatique, j\'aime créer des projets innovants et me challenger en permanence. Mon expérience en bibliothèque m\'a appris l\'importance de l\'organisation et de la rigueur, des qualités que je mets à profit dans mon travail de développeur.',
};

export default AboutMe;
