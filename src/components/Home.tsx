interface HomeProps {
    title: string;
    arrowDownText: string;
}

function Home(props: HomeProps) {
    return (
        <section id="home">
            <nav>
                <a href="#">
                    <i className="arrow up"></i>
                </a>
            </nav>
            <div className="bg-doodle"></div>
            <svg viewBox="0 0 600 200">
                <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="50%" dy=".35em">{props.title}</text>
                </symbol>
                <use className="text" xlinkHref="#s-text"></use>
                <use className="text" xlinkHref="#s-text"></use>
                <use className="text" xlinkHref="#s-text"></use>
                <use className="text" xlinkHref="#s-text"></use>
                <use className="text" xlinkHref="#s-text"></use>
            </svg>
            <nav>
                <a href="#about-me">
                    <p>{props.arrowDownText}</p>
                    <i className="arrow down"></i>
                </a>
            </nav>
        </section>
    );
}

Home.defaultProps = {
    title: 'Portfolio',
    arrowDownText: 'A propos de moi'
};

export default Home;
