import React, { useState, useRef } from "react";

const servicesList = [
  {
    title: "Création de sites web sur mesure",
    description:
      "Concevez un site unique et adapté à vos besoins, que ce soit pour une entreprise, un projet personnel ou un portfolio.",
    price: "XX€",
  },
  {
    title: "Développement de boutiques en ligne",
    description:
      "Lancez votre boutique en ligne avec une solution e-commerce performante, incluant gestion des produits, paiement sécurisé et suivi des commandes.",
    price: "XX€",
  },
  {
    title: "Optimisation de la vitesse et du référencement (SEO)",
    description:
      "Améliorez la performance de votre site et boostez votre visibilité sur Google pour attirer plus de visiteurs.",
    price: "XX€",
  },
  {
    title: "Maintenance et support technique",
    description:
      "Assurez le bon fonctionnement de votre site grâce à des mises à jour régulières et un support en cas de problème.",
    price: "XX€",
  },
  {
    title: "Sécurisation de votre site web",
    description:
      "Protégez votre site contre les piratages et mettez en place des systèmes de sécurité avancés pour protéger vos données.",
    price: "XX€",
  },
  {
    title: "Création d'applications web et mobile",
    description:
      "Développez des applications interactives pour web et mobile, idéales pour améliorer l'engagement de vos utilisateurs et faciliter leur expérience.",
    price: "XX€",
  },
];

const STACK_STYLES = [
  { x: 0, y: 0, rot: 0, scale: 1, bright: 1, opac: 1 },
  { x: -4, y: -18, rot: -4, scale: 0.95, bright: 0.93, opac: 0.92 },
  { x: 14, y: -34, rot: 3, scale: 0.89, bright: 0.86, opac: 0.78 },
];

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [animatingDir, setAnimatingDir] = useState<"left" | "right" | null>(
    null,
  );

  const startX = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (animatingDir) return;
    if (e.button !== 0) return; // Clic gauche ou contact tactile

    setIsDragging(true);
    startX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || animatingDir) return;
    setDragX(e.clientX - startX.current);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging || animatingDir) return;
    setIsDragging(false);

    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    const threshold = 85;

    if (dragX > threshold) {
      triggerFlyOut("right");
    } else if (dragX < -threshold) {
      triggerFlyOut("left");
    } else {
      setDragX(0);
    }
  };

  const triggerFlyOut = (direction: "left" | "right") => {
    if (animatingDir) return;
    setAnimatingDir(direction);

    setTimeout(() => {
      if (direction === "left") {
        setCurrentIndex((prev) => (prev + 1) % servicesList.length);
      } else {
        setCurrentIndex(
          (prev) => (prev - 1 + servicesList.length) % servicesList.length,
        );
      }
      setDragX(0);
      setAnimatingDir(null);
    }, 280);
  };

  const dragProgress = Math.min(Math.abs(dragX) / 100, 1);
  const isMobile = window.innerWidth < 768;

  return (
    <div id="services">
      <div className="content">
        <div className="header">
          <h2>
            <span>Mes </span>services
          </h2>
        </div>

        <div className="main">
          <div className="decorations">
            <span
              className="deco-circle"
              style={
                isMobile
                  ? { top: "10%", left: "10%" }
                  : { top: "35%", left: "15%" }
              }
            />
            <span
              className="deco-plus"
              style={
                isMobile
                  ? { top: "45%", left: "10px" }
                  : { top: "45%", left: "28%" }
              }
            />
            <span
              className="deco-circle"
              style={
                isMobile
                  ? { top: "70%", left: "30px", width: "8px", height: "8px" }
                  : { top: "58%", left: "10%", width: "8px", height: "8px" }
              }
            />
            <span
              className="deco-plus"
              style={
                isMobile
                  ? { top: "30%", right: "15px", transform: "rotate(15deg)" }
                  : { top: "40%", right: "22%", transform: "rotate(15deg)" }
              }
            />
            <span
              className="deco-circle"
              style={
                isMobile
                  ? { top: "82%", right: "30px" }
                  : { top: "52%", right: "14%" }
              }
            />
          </div>

          <div className="cards">
            {servicesList.map((service, index) => {
              const total = servicesList.length;
              const offset = (index - currentIndex + total) % total;

              // Seules les 3 premières cartes sont rendues
              if (offset > 2) return null;

              const isTop = offset === 0;

              let transform = "";
              let transition = "";
              let opacity = 1;
              let brightness = 1;

              if (isTop) {
                if (animatingDir) {
                  const flyX = animatingDir === "right" ? 540 : -540;
                  const flyRotate = animatingDir === "right" ? 24 : -24;
                  transform = `translate3d(${flyX}px, 0, 0) rotate(${flyRotate}deg)`;
                  transition =
                    "transform 0.28s cubic-bezier(0.4, 0, 0.8, 1), opacity 0.28s ease";
                  opacity = 0;
                } else if (isDragging) {
                  const rotate = dragX * 0.08;
                  transform = `translate3d(${dragX}px, 0, 0) rotate(${rotate}deg)`;
                  opacity = 1 - Number(dragProgress.toFixed(2));
                  transition = "none";
                } else {
                  transform = "translate3d(0, 0, 0) rotate(0deg)";
                  transition = "transform 0.35s cubic-bezier(0.2, 0.9, 0.3, 1)";
                }
              } else {
                // Redressement de la carte inférieure lors du swipe
                const currentStyle = STACK_STYLES[offset];
                const targetStyle = STACK_STYLES[offset - 1];

                const currentX =
                  currentStyle.x +
                  (targetStyle.x - currentStyle.x) * dragProgress;
                const currentY =
                  currentStyle.y +
                  (targetStyle.y - currentStyle.y) * dragProgress;
                const currentRot =
                  currentStyle.rot +
                  (targetStyle.rot - currentStyle.rot) * dragProgress;
                const currentScale =
                  currentStyle.scale +
                  (targetStyle.scale - currentStyle.scale) * dragProgress;
                brightness =
                  currentStyle.bright +
                  (targetStyle.bright - currentStyle.bright) * dragProgress;
                opacity =
                  currentStyle.opac +
                  (targetStyle.opac - currentStyle.opac) * dragProgress;

                transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${currentRot}deg) scale(${currentScale})`;
                transition = isDragging
                  ? "none"
                  : "all 0.35s cubic-bezier(0.25, 1, 0.5, 1)";
              }

              return (
                <div
                  key={index}
                  className={`service service ${isTop ? "top" : ""}`}
                  style={{
                    zIndex: 10 - offset,
                    transform,
                    transition,
                    opacity,
                    filter: `brightness(${brightness})`,
                    pointerEvents: isTop ? "auto" : "none",
                  }}
                  onPointerDown={isTop ? handlePointerDown : undefined}
                  onPointerMove={isTop ? handlePointerMove : undefined}
                  onPointerUp={isTop ? handlePointerUp : undefined}
                  onPointerCancel={isTop ? handlePointerUp : undefined}
                >
                  <div className="notification-header">
                    <div className="time">Service</div>
                    <div className="necessities"></div>
                  </div>
                  <div className="book-cover">
                    <div className="book-top">
                      <h5 className="author">
                        Salaha
                        <br />
                        <span>Sokhona</span>
                      </h5>
                      <div className="separator"></div>
                      <h4 className="title">{service.title}</h4>
                    </div>
                    <div className="book-side"></div>
                  </div>
                  <div className="preface">
                    <div className="content">
                      <div className="details">
                        <h5 className="title">{service.title}</h5>
                        <p className="description">{service.description}</p>
                      </div>
                      <div className="footer">
                        <div className="price">
                          <span className="price-label">À partir de </span>
                          <span className="price-value">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="stack-controls">
          <button
            type="button"
            className="action-btn prev-btn"
            onClick={() => triggerFlyOut("left")}
            aria-label="Service précédent"
            title="Précédent"
          >
            ←
          </button>
          <div className="contact">
            <a
              href="mailto:sokhona.salaha@gmail.com?subject=Demande%20d%27informations"
              className="button-style-1"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <span className="button-style-1-content">Me contacter</span>
            </a>
          </div>
          <button
            type="button"
            className="action-btn next-btn"
            onClick={() => triggerFlyOut("right")}
            aria-label="Service suivant"
            title="Suivant"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
