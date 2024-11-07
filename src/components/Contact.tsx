function Contact() {
  return (
    <section id="contact">
      <div className="content">
        <h2>
          <span>Con</span>
          <span>tact</span>
        </h2>
        <p>
          <a href="mailto:sokhona.salaha@gmail.com">sokhona.salaha@gmail.com</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/salaha-sokhona/" target="_blank">
            LinkedIn
          </a>
        </p>
        <p>
          <a href="https://github.com/salaahl" target="_blank">
            Github
          </a>
        </p>
      </div>
      <div className="background-transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="visual"
          viewBox="0 0 900 600"
        >
          <rect x="0" y="0" width="1920" height="1080" fill="transparent" />
          <defs>
            <linearGradient id="myGradient" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#67af8e" stopOpacity="1" />
              <stop offset="100%" stopColor="#31717b" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0 162L21.5 159.8C43 157.7 86 153.3 128.8 143.5C171.7 133.7 214.3 118.3 257.2 135.5C300 152.7 343 202.3 385.8 206C428.7 209.7 471.3 167.3 514.2 170.5C557 173.7 600 222.3 642.8 243.8C685.7 265.3 728.3 259.7 771.2 252.2C814 244.7 857 235.3 878.5 230.7L900 226L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="url(#myGradient)"
          />
        </svg>
      </div>
    </section>
  );
}

export default Contact;
