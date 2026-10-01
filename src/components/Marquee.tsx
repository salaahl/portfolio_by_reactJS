import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Marquee: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let xPos = 0;
    const baseSpeed = 0.08; // Vitesse de croisière automatique
    let scrollVelocity = 0;

    // Capture de la vélocité instantanée du scroll
    const trigger = ScrollTrigger.create({
      onUpdate: (self) => {
        // Normalisation de la vitesse de la molette
        scrollVelocity = gsap.utils.clamp(-60, 60, self.getVelocity() / 350);
      },
    });

    // Boucle d'animation synchronisée avec le ticker de GSAP (60/120 fps)
    const tick = () => {
      // Amortissement progressif de l'accélération
      scrollVelocity *= 0.92;
      xPos -= baseSpeed + scrollVelocity * 0.04;

      // Boucle infinie invisible : réinitialisation dès que le premier bloc a défilé (-50%)
      if (xPos <= -50) {
        xPos = 0;
      } else if (xPos > 0) {
        xPos = -50;
      }

      gsap.set(track, { xPercent: xPos });
    };

    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      trigger.kill();
    };
  }, []);

  const items = [
    "FULL-STACK",
    "VUE.JS",
    "TYPESCRIPT",
    "LARAVEL",
    "SYMFONY",
    "DJANGO",
    "FLUTTER",
    "SAP ABAP",
    "POSTGRESQL",
    "DOCKER",
  ];
  const phrase = items.join(" — ") + " — ";
  const repetitions = Array(2).fill(phrase);

  return (
    <div
      className="w-full overflow-hidden border-b border-[var(--ink)] bg-[var(--paper)] py-2 md:py-3 select-none"
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform font-display text-[clamp(28px,4.5vw,56px)] leading-none tracking-tight text-[var(--ink)] uppercase"
      >
        {/* Deux blocs identiques pour assurer une boucle sans coupure */}
        <div className="flex shrink-0">
          {repetitions.map((item, idx) => (
            <span key={`a-${idx}`} className="mr-2">
              {item}
            </span>
          ))}
        </div>
        <div className="flex shrink-0">
          {repetitions.map((item, idx) => (
            <span key={`b-${idx}`} className="mr-2">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
