import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutMe: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(".char-reveal", {
        opacity: 1,
        stagger: 0.02,
        ease: "none",
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 75%",
          end: "bottom 45%",
          scrub: 0.3,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const fullSentence = [
    { text: "De", highlight: false },
    { text: "l'exploitation", highlight: false },
    { text: "informatique", highlight: false },
    { text: "en", highlight: false },
    { text: "médiathèque", highlight: false },
    { text: "au", highlight: false },
    { text: "SI", highlight: false },
    { text: "financier", highlight: false },
    { text: "de", highlight: false },
    { text: "la", highlight: false },
    { text: "Ville", highlight: false },
    { text: "de", highlight: false },
    { text: "Paris,", highlight: false },
    { text: "j'ai", highlight: false },
    { text: "forgé", highlight: false },
    { text: "une", highlight: false },
    { text: "solide", highlight: false },
    { text: "maîtrise", highlight: false },
    { text: "des", highlight: false },
    { text: "processus", highlight: true },
    { text: "métiers", highlight: true },
    { text: "complexes.", highlight: true },
    { text: "En", highlight: false },
    { text: "parallèle,", highlight: false },
    { text: "je", highlight: false },
    { text: "conçois", highlight: false },
    { text: "et", highlight: false },
    { text: "développe", highlight: false },
    { text: "des", highlight: false },
    { text: "applications", highlight: false },
    { text: "web", highlight: false },
    { text: "et", highlight: false },
    { text: "mobiles", highlight: false },
    { text: "robustes.", highlight: false },
    { text: "Rigueur", highlight: false },
    { text: "d'analyse", highlight: false },
    { text: "d'un", highlight: false },
    { text: "côté,", highlight: false },
    { text: "culture", highlight: false },
    { text: "du", highlight: false },
    { text: "code", highlight: false },
    { text: "de", highlight: false },
    { text: "l'autre.", highlight: false },
  ];

  return (
    <section
      id="moi"
      ref={sectionRef}
      className="w-full border-b border-[var(--ink)] bg-[var(--paper)] py-16 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-start">
        {/* Colonne gauche */}
        <div>
          <p
            ref={textContainerRef}
            className="font-serif-quote text-2xl md:text-3xl leading-relaxed"
          >
            {fullSentence.map((word, wIdx) => (
              <span
                key={wIdx}
                className={`inline-block whitespace-nowrap mr-[0.28em] ${
                  word.highlight ? "text-[var(--green)]" : "text-[var(--ink)]"
                }`}
              >
                {word.text.split("").map((char, cIdx) => (
                  <span
                    key={cIdx}
                    className="char-reveal inline-block opacity-0 will-change-transform"
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </p>
        </div>

        {/* Colonne droite */}
        <div className="border-t lg:border-t-0 lg:border-l border-[var(--ink)] pt-8 lg:pt-0 lg:pl-8 flex flex-col gap-6 font-mono-code text-xs md:text-sm tracking-wider uppercase">
          <div>
            <div className="font-bold text-[var(--ink)] text-base md:text-lg">
              13 ANS
            </div>
            <div className="text-[var(--muted)]">
              D'EXPÉRIENCE PROFESSIONNELLE
            </div>
          </div>
          <div className="border-t border-[var(--ink)]/30 pt-4">
            <div className="font-bold text-[var(--ink)] text-base md:text-lg">
              BAC +4
            </div>
            <div className="text-[var(--muted)]">INGÉNIERIE LOGICIELLE</div>
          </div>
          <div className="border-t border-[var(--ink)]/30 pt-4">
            <div className="font-bold text-[var(--ink)] text-base md:text-lg">
              + 15 DE PROJETS
            </div>
            <div className="text-[var(--muted)]">
              WEB · MOBILE · SI FINANCIER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
