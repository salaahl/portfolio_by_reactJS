interface HomeProps {
    title: string;
}

function Home(props: HomeProps) {
    return (
        <section id="home">
            <svg viewBox="0 0 400 100">
                <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="50%" dy=".35em">{props.title}</text>
                </symbol>
                <use className="text" xlinkHref="#s-text"></use>
                <use className="text" xlinkHref="#s-text"></use>
                <use className="text" xlinkHref="#s-text"></use>
                <use className="text" xlinkHref="#s-text"></use>
                <use className="text" xlinkHref="#s-text"></use>
            </svg>
        </section>
    );
}

Home.defaultProps = {
    title: 'Portfolio',
};

export default Home;
