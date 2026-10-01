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
    if (prefersReducedMotion || !textContainerRef.current) return;

    const words = textContainerRef.current.querySelectorAll(".scrub-word");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 35%",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const fullSentence = [
    { text: "De", highlight: false },
    { text: "la", highlight: false },
    { text: "médiation", highlight: false },
    { text: "numérique", highlight: false },
    { text: "en", highlight: false },
    { text: "bibliothèque", highlight: false },
    { text: "aux", highlight: false },
    { text: "systèmes", highlight: false },
    { text: "d'information", highlight: false },
    { text: "de", highlight: false },
    { text: "la", highlight: false },
    { text: "Ville", highlight: false },
    { text: "de", highlight: false },
    { text: "Paris :", highlight: false },
    { text: "je", highlight: false },
    { text: "conçois", highlight: false },
    { text: "des", highlight: false },
    { text: "applications", highlight: false },
    { text: "robustes", highlight: false },
    { text: "et", highlight: false },
    { text: "je", highlight: true },
    { text: "comprends", highlight: true },
    { text: "les", highlight: true },
    { text: "processus", highlight: true },
    { text: "métiers", highlight: true },
    { text: "complexes", highlight: true },
    { text: "qui", highlight: false },
    { text: "se", highlight: false },
    { text: "cachent", highlight: false },
    { text: "derrière.", highlight: false },
    { text: "Rigueur", highlight: false },
    { text: "d'analyse", highlight: false },
    { text: "d'un", highlight: false },
    { text: "côté,", highlight: false },
    { text: "envie", highlight: false },
    { text: "de", highlight: false },
    { text: "construire", highlight: false },
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
            className="font-serif-quote text-[clamp(22px,2.6vw,40px)] leading-[1.35] text-[var(--ink)]"
          >
            {fullSentence.map((item, idx) => (
              <span
                key={idx}
                className={`scrub-word inline-block mr-[0.28em] transition-colors ${
                  item.highlight ? "text-[var(--green)] font-semibold" : ""
                }`}
              >
                {item.text}
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
              + 11 PROJETS
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
