import imgPlaceholder from '../assets/images/placeholder.png'

function Services() {
    return (
        <div
            id="services"
        >
            <div className="content">
                <div className="header">
                    <h2><span>Mes</span>services</h2>
                </div>
                <Service />
                <Service />
                <Service />
                <Service />
                <Service />
                <Service />
            </div>
        </div>
    );
}

export default Services;

interface ServiceProps {
    image: string;
    title: string;
    description: string;
    price: string;
}

function Service(props: ServiceProps) {
    return (
        <article className="service">
            <div className="content">
                <div className="img-container">
                    <img src={props.image} alt="image du service" />
                </div>
                <div className="details">
                    <h5 className="title">
                        {props.title}
                    </h5>
                    <p className="description">
                        {props.description}
                    </p>
                </div>
                <div className="footer">
                    <div className="price">
                        <span className="price-label">À partir de</span>
                        <span className="price-value">{props.price}</span>
                    </div>
                    <a href="#" className="button-style-1">
                        <span className="button-style-1-content">En savoir plus</span>
                    </a>
                </div>
            </div>
        </article>
    );
}

Service.defaultProps = {
    image: imgPlaceholder,
    title: 'Service XXX',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 'XX€',
};
