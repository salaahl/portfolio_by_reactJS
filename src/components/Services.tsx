function Services() {
  return (
    <div id="services">
      <div className="content">
        <div className="header">
          <h2>
            <span>Mes</span>services
          </h2>
        </div>
        <Service
          title="Création de sites web sur mesure"
          description="Concevez un site unique et adapté à vos besoins, que ce soit pour une entreprise, un projet personnel ou un portfolio."
        />
        <Service
          title="Développement de boutiques en ligne"
          description="Lancez votre boutique en ligne avec une solution e-commerce performante, incluant gestion des produits, paiement sécurisé et suivi des commandes."
        />
        <Service
          title="Optimisation de la vitesse et du référencement (SEO)"
          description="Améliorez la performance de votre site et boostez votre visibilité sur Google pour attirer plus de visiteurs."
        />
        <Service
          title="Maintenance et support technique"
          description="Assurez le bon fonctionnement de votre site grâce à des mises à jour régulières et un support en cas de problème."
        />
        <Service
          title="Sécurisation de votre site web"
          description="Protégez votre site contre les piratages et mettez en place des systèmes de sécurité avancés pour protéger vos données."
        />
        <Service
          title="Création d'applications web et mobile"
          description="Développez des applications interactives pour web et mobile, idéales pour améliorer l'engagement de vos utilisateurs et faciliter leur expérience."
        />
      </div>
    </div>
  );
}

export default Services;

interface ServiceProps {
  title: string;
  description: string;
  price?: string;
}

function Service({
  title = "Service XXX",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  price = "XX€",
}: ServiceProps) {
  return (
    <article className="service">
      <div className="img-container">
        <h3 className="title">{title}</h3>
      </div>
      <div className="content">
        <div className="details">
          <h5 className="title">{title}</h5>
          <p className="description">{description}</p>
        </div>
        <div className="footer">
          <div className="price">
            <span className="price-label">À partir de</span>
            <span className="price-value">{price}</span>
          </div>
          <a
            href="mailto:sokhona.salaha@gmail.com?subject=Demande%20de%20devis"
            className="button-style-1"
          >
            <span className="button-style-1-content">Demander un devis</span>
          </a>
        </div>
      </div>
    </article>
  );
}
