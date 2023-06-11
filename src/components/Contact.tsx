interface ContactProps {
    mailto: string;
    mail: string;
    arrowUpText: string;
}

function Contact(props: ContactProps) {
    return (
        <div id="contact">
            <a href="#projects">
                <p>{props.arrowUpText}</p>
                <i className="arrow up"></i>
            </a>
            <div className="content">
                <h2><span>Con</span><span>tact</span></h2>
                <p>
                    Mail : <a href={props.mailto}>{props.mail}</a>
                </p>
            </div>
            <a href="#">
                <i className="arrow down"></i>
            </a>
        </div>
    );
}

Contact.defaultProps = {
    mailto: 'mailto:sokhona.salaha@gmail.com',
    mail: 'sokhona.salaha@gmail.com',
    arrowUpText: 'Mes projets'
};

export default Contact;