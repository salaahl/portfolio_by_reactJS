interface ContactProps {
    description: string;
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
                <p>{props.description}</p>
            </div>
            <a href="#">
                <i className="arrow down"></i>
            </a>
        </div>
    );
}

Contact.defaultProps = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    arrowUpText: 'Mes projets'
};

export default Contact;