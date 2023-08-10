interface ContactProps {
    mailto: string;
    mail: string;
    arrowUpText: string;
}

function Contact(props: ContactProps) {
    return (
        <section id="contact">
            <nav>
                <a href="#projects">
                    <p>{props.arrowUpText}</p>
                    <i className="arrow up"></i>
                </a>
            </nav>
            <div className="content">
                <h2><span>Con</span><span>tact</span></h2>
                <p>
                    <a href={props.mailto}>{props.mail}</a>
                </p>
            </div>
            <nav>
                <a href="#">
                    <i className="arrow down"></i>
                </a>
            </nav>
        </section>
    );
}

Contact.defaultProps = {
    mailto: 'mailto:sokhona.salaha@gmail.com',
    mail: 'sokhona.salaha@gmail.com',
    arrowUpText: 'Mes projets'
};

export default Contact;
