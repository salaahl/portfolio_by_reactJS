import React, { useState } from "react";

interface CaseStudy {
  id: string;
  title: string;
  desc: string;
  stack: string[];
  demo: string;
  code: string;
  shapeVariant: "circles" | "rectangles" | "bars";
  challenge: {
    problem: string;
    solution: string;
  };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "01",
    title: "NutriVérif",
    desc: "Analyse de produits alimentaires via l'API Open Food Facts.",
    stack: ["VUE.JS", "TYPESCRIPT", "PINIA", "TAILWIND"],
    demo: "https://nutriverif.onrender.com/",
    code: "https://github.com/salaahl/nutri_verif_by_vue.js",
    shapeVariant: "circles",
    challenge: {
      problem:
        "Latence de l'API externe et structures de données hétérogènes selon les pays.",
      solution:
        "Proxy intermédiaire avec cache en mémoire, normalisation typée TypeScript et calcul dynamique du Nutri-Score côté client.",
    },
  },
  {
    id: "02",
    title: "DiaShop",
    desc: "Site de prêt-à-porter avec paiement en ligne.",
    stack: ["LARAVEL", "STRIPE", "TAILWIND"],
    demo: "https://diashop.onrender.com/",
    code: "https://github.com/salaahl/diashop-app",
    shapeVariant: "rectangles",
    challenge: {
      problem:
        "Risque de commandes orphelines en cas de déconnexion réseau lors du paiement.",
      solution:
        "Sécurisation par transactions SQL atomiques et traitement asynchrone des webhooks Stripe avec vérification d'idempotence.",
    },
  },
  {
    id: "03",
    title: "Bibliothèque numérique",
    desc: "Catalogue et gestion de prêts, inspirés de mon métier précédent.",
    stack: ["FULL-STACK"],
    demo: "https://bibliotheque-numerique.onrender.com/",
    code: "https://github.com/salaahl/library",
    shapeVariant: "bars",
    challenge: {
      problem:
        "Modélisation des cycles de réservation multiples et conflits de disponibilité simultanés.",
      solution:
        "Architecture SQL relationnelle stricte avec verrous pessimistes lors des emprunts et automatisation des relances de retards.",
    },
  },
];

export const Projects: React.FC = () => {
  const [openChallenge, setOpenChallenge] = useState<string | null>(null);

  return (
    <section
      id="projets"
      className="w-full border-b border-[var(--ink)] bg-[var(--paper)] py-14 md:py-20"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex items-baseline gap-3 mb-10 pb-4 border-b border-[var(--ink)]">
          <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-none uppercase">
            PROJETS
          </h2>
          <span className="font-mono-code text-xs md:text-sm font-semibold text-[var(--muted)]">
            (11)
          </span>
        </div>

        <div className="divide-y divide-[var(--ink)]">
          {CASE_STUDIES.map((p) => {
            const isOpen = openChallenge === p.id;
            return (
              <article
                key={p.id}
                className="group py-8 md:py-12 grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[400px_1fr] gap-6 md:gap-12 items-start"
              >
                {/* Vignette */}
                <div className="w-full aspect-[16/10] border border-[var(--ink)] bg-[#f7f5ef] relative overflow-hidden flex items-center justify-center p-6">
                  {p.shapeVariant === "circles" && (
                    <div className="relative w-36 h-24 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-[var(--green)] mix-blend-multiply opacity-90 transition-transform duration-500 ease-out group-hover:-translate-x-3" />
                      <div className="w-20 h-20 rounded-full bg-[var(--red)] mix-blend-multiply opacity-90 -ml-7 transition-transform duration-500 ease-out group-hover:translate-x-3" />
                    </div>
                  )}
                  {p.shapeVariant === "rectangles" && (
                    <div className="relative w-36 h-24 flex items-center justify-center">
                      <div className="w-20 h-20 bg-[var(--green)] mix-blend-multiply opacity-90 transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2" />
                      <div className="w-20 h-20 bg-[var(--red)] mix-blend-multiply opacity-90 -ml-8 mt-4 transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-2" />
                    </div>
                  )}
                  {p.shapeVariant === "bars" && (
                    <div className="w-48 flex flex-col gap-3">
                      <div className="h-5 w-3/4 bg-[var(--green)] mix-blend-multiply opacity-90 transition-transform duration-500 ease-out group-hover:translate-x-2" />
                      <div className="h-5 w-full bg-[var(--red)] mix-blend-multiply opacity-90 transition-transform duration-500 ease-out group-hover:-translate-x-2" />
                    </div>
                  )}
                </div>

                {/* Contenu */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="font-mono-code text-xs md:text-sm text-[var(--muted)] font-bold">
                      {p.id}
                    </span>

                    {/* Titre sobre sans dédoublement */}
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mt-1 mb-2">
                      {p.title}
                    </h3>

                    <p className="text-sm md:text-base text-[var(--ink)]/90 max-w-xl leading-relaxed mb-4">
                      {p.desc}
                    </p>

                    <div className="mb-6">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenChallenge((prev) =>
                            prev === p.id ? null : p.id,
                          )
                        }
                        className="font-mono-code text-xs uppercase tracking-wider border border-[var(--ink)] px-2.5 py-1 hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors flex items-center gap-2 cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>DÉFI TECHNIQUE</span>
                        <span className="font-bold">{isOpen ? "−" : "+"}</span>
                      </button>

                      {isOpen && (
                        <div className="mt-3 p-4 border border-[var(--ink)] bg-[#ede8dc] font-mono-code text-xs space-y-2">
                          <p>
                            <strong className="text-[var(--red)] uppercase">
                              Contrainte :
                            </strong>{" "}
                            {p.challenge.problem}
                          </p>
                          <p>
                            <strong className="text-[var(--green)] uppercase">
                              Résolution :
                            </strong>{" "}
                            {p.challenge.solution}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 font-mono-code text-xs md:text-sm">
                    <p className="text-[var(--muted)] tracking-wider">
                      {p.stack.join(" · ")}
                    </p>

                    <div className="flex gap-6 font-bold pt-1">
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ink-stroke ink-stroke-green pb-0.5"
                      >
                        DÉMO ↗
                      </a>
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ink-stroke pb-0.5"
                      >
                        CODE ↗
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Projets secondaires */}
        <div className="mt-8 border-t border-[var(--ink)] divide-y divide-[var(--ink)] font-mono-code text-xs md:text-sm uppercase tracking-wider font-semibold">
          <a
            href="https://github.com/salaahl/restaurant_project"
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 flex justify-between items-center hover:bg-black/5 px-2 transition-colors"
          >
            <span>04 RESTAURANT LE VINGTIÈME</span>
            <span>SYMFONY ↗</span>
          </a>
          <a
            href="https://github.com/salaahl/e-commerce-by-laravel"
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 flex justify-between items-center hover:bg-black/5 px-2 transition-colors"
          >
            <span>05 E-COMMERCE DE PARFUMS</span>
            <span>LARAVEL ↗</span>
          </a>
          <a
            href="https://github.com/salaahl"
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 flex justify-between items-center hover:bg-black/5 px-2 text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
          >
            <span>06 + 5 AUTRES PROJETS</span>
            <span>VOIR TOUT →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
