import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  const risoRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = risoRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      el.style.setProperty("--dx", "0.025em");
      el.style.setProperty("--dy", "0.02em");
      return;
    }

    // A6 : Recalage des calques à l'entrée dans le viewport
    gsap.fromTo(
      el,
      { "--dx": "0.12em", "--dy": "0.07em", opacity: 0 },
      {
        "--dx": "0.025em",
        "--dy": "0.02em",
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  // Décalage dynamique au survol de « PARLONS-EN »
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = risoRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    gsap.to(el, {
      "--dx": `${0.025 + normX * 0.05}em`,
      "--dy": `${0.02 + normY * 0.035}em`,
      duration: 0.15,
      ease: "power1.out",
      overwrite: "auto",
    });
  };

  const handlePointerLeave = () => {
    const el = risoRef.current;
    if (!el) return;
    gsap.to(el, {
      "--dx": "0.025em",
      "--dy": "0.02em",
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="w-full bg-[var(--paper)] py-16 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col gap-10">
        <span className="font-mono-code text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--muted)]">
          04 CONTACT
        </span>

        {/* Titre Risographique interactif */}
        <div className="w-full overflow-hidden select-none py-2">
          <div
            ref={risoRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="riso-title font-display text-[clamp(56px,12vw,200px)] tracking-tight text-left cursor-crosshair"
            aria-label="Parlons-en"
          >
            <span className="riso-layer riso-layer-red" aria-hidden="true">
              PARLONS-EN
            </span>
            <span className="riso-layer riso-layer-green" aria-hidden="true">
              PARLONS-EN
            </span>
          </div>
        </div>

        {/* Liens */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono-code text-xs md:text-sm uppercase tracking-wider font-bold pt-4 border-t border-[var(--ink)]">
          <a
            href="mailto:sokhona.salaha@gmail.com"
            className="underline decoration-[var(--ink)] hover:text-[var(--green)] transition-colors"
          >
            EMAIL ↗
          </a>
          <a
            href="https://www.linkedin.com/in/salaha-sokhona/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[var(--ink)] hover:text-[var(--green)] transition-colors"
          >
            LINKEDIN ↗
          </a>
          <a
            href="https://github.com/salaahl"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[var(--ink)] hover:text-[var(--green)] transition-colors"
          >
            GITHUB ↗
          </a>
          <a
            href="/cv.pdf"
            download
            className="underline decoration-[var(--ink)] hover:text-[var(--red)] transition-colors"
          >
            CV ↓
          </a>
        </div>

        <p className="font-mono-code text-[11px] text-[var(--muted)] pt-8">
          © 2026 Salaha Sokhona. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
