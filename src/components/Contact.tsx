interface ContactProps {
    mailto: string;
    linkedin: string;
    github: string;
}

function Contact(props: ContactProps) {
    return (
        <section id="contact">
            <div className="content">
                <h2><span>Con</span><span>tact</span></h2>
                <p>
                    <a href={props.mailto}>Mail</a>
                </p>
                <p>
                    <a href={props.linkedin} target="_blank">LinkedIn</a>
                </p>
                <p>
                    <a href={props.github} target="_blank">Github</a>
                </p>
            </div>
        </section>
    );
}

Contact.defaultProps = {
    mailto: 'mailto:sokhona.salaha@gmail.com',
    linkedin: 'https://www.linkedin.com/in/salaha-sokhona/',
    github: 'https://github.com/salaahl',
};

export default Contact;
