import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const Home: React.FC = () => {
  const risoRef = useRef<HTMLHeadingElement>(null);

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

    // A1 : Décalage à l'arrivée puis calage initial
    gsap.fromTo(
      el,
      { "--dx": "0.14em", "--dy": "0.08em", opacity: 0 },
      {
        "--dx": "0.025em",
        "--dy": "0.02em",
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
      },
    );
  }, []);

  // Décalage dynamique au survol
  const handlePointerMove = (e: React.PointerEvent<HTMLHeadingElement>) => {
    const el = risoRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    // Calcul de l'écart par rapport au centre du titre (-1 à +1)
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
    <section
      id="hero"
      className="min-h-[calc(100dvh-53px)] flex flex-col justify-between px-4 md:px-8 py-6 md:py-10 max-w-[1400px] mx-auto w-full border-b border-[var(--ink)]"
    >
      <div className="flex-1 flex items-center w-full overflow-hidden my-auto py-8">
        <h1
          ref={risoRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="riso-title font-display text-[clamp(64px,25vw,290px)] md:text-[clamp(64px,15.5vw,290px)] tracking-tight text-left w-full select-none cursor-crosshair"
          aria-label="Salaha Sokhona"
        >
          <span className="riso-layer riso-layer-red" aria-hidden="true">
            SALAHA
            <br />
            SOKHONA
          </span>
          <span className="riso-layer riso-layer-green" aria-hidden="true">
            SALAHA
            <br />
            SOKHONA
          </span>
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 font-mono-code text-xs md:text-sm font-semibold tracking-wider pt-6 border-t border-[var(--ink)] uppercase">
        <div className="space-y-0.5">
          <p className="text-[var(--ink)]">DÉVELOPPEUR FULL-STACK</p>
          <p className="text-[var(--muted)]">CONSULTANT SAP FI/CO · PARIS</p>
        </div>
        <div className="text-[var(--ink)] flex items-center gap-1.5 self-start sm:self-auto">
          <span>DÉFILER</span>
          <span aria-hidden="true">↓</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
