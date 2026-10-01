import React from "react";

interface CaseStudy {
  id: string;
  title: string;
  desc: string;
  stack: string[];
  demo: string;
  code: string;
  shapeVariant: "nutriverif" | "diashop" | "bibliotheque" | "restaurant";
  highlights?: string[];
  challenge?: {
    problem: string;
    solution: string;
  };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "01",
    title: "NutriVérif",
    desc: "Scan de produits et de plats par IA pour obtenir Nutri-Score et infos nutritionnelles.",
    stack: ["VUE.JS", "FLUTTER", "SYMFONY", "TYPESCRIPT", "IA VISION"],
    demo: "https://nutriverif.onrender.com/",
    code: "https://github.com/salaahl/nutri_verif_by_vue.js",
    shapeVariant: "nutriverif",
    highlights: [
      "Scan photo de plat par IA : estimation des portions, Nutri-Score, NOVA et AJR",
      "Version web (Vue.js) et mobile (Flutter)",
      "Proxy PHP/Symfony pour agréger l'API Vision et le catalogue Open Food Facts",
    ],
    challenge: {
      problem:
        "L'IA et l'API renvoient des données incomplètes ou avec des formats variables selon la photo.",
      solution:
        "Validation stricte des données avec TypeScript, valeurs de secours et calcul direct des AJR côté client.",
    },
  },
  {
    id: "02",
    title: "DiaShop",
    desc: "Boutique en ligne de vêtements avec gestion des stocks et paiement Stripe.",
    stack: ["LARAVEL", "STRIPE", "SQL", "TAILWIND"],
    demo: "https://diashop.onrender.com/",
    code: "https://github.com/salaahl/diashop-app",
    shapeVariant: "diashop",
    highlights: [
      "Gestion précise des déclinaisons de stocks par taille",
      "Tunnel de paiement bancaire sécurisé via Stripe Elements",
      "Traitement asynchrone des e-mails et factures en arrière-plan",
    ],
    challenge: {
      problem:
        "Éviter la survente lors de commandes simultanées sur la dernière pièce d'une taille, et prévenir les doublons lors des relances webhook Stripe.",
      solution:
        "Verrous pessimistes en base (lockForUpdate) au sein d'une transaction SQL atomique et idempotence stricte des événements Stripe basée sur l'identifiant unique de session.",
    },
  },
  {
    id: "03",
    title: "Bibliothèque numérique",
    desc: "Gestion de prêts avec liseuse 3D pensée pour recréer la sensation du livre papier.",
    stack: ["DJANGO", "PYTHON", "POSTGRESQL"],
    demo: "https://bibliotheque-numerique.onrender.com/",
    code: "https://github.com/salaahl/local_library_by_django",
    shapeVariant: "bibliotheque",
    highlights: [
      "Liseuse 3D interactive avec effet de page tournée et rendu papier",
      "Gestion des réservations, emprunts et alertes de retard",
      "Espaces séparés pour les usagers et l'administration",
    ],
    challenge: {
      problem:
        "Rendre le feuilletage 3D fluide dans le navigateur sans ralentir la lecture du texte.",
      solution:
        "Rendu 3D léger optimisé avec textures basse consommation et séparation propre entre le texte et le moteur d'affichage.",
    },
  },
  {
    id: "04",
    title: "Restaurant Le Vingtième",
    desc: "Site de restaurant avec réservation de table en direct.",
    stack: ["SYMFONY", "PHP", "DOCTRINE", "BOOTSTRAP"],
    demo: "https://restaurant-le-vingtieme.onrender.com/",
    code: "https://github.com/salaahl/restaurant_website_by_symfony",
    shapeVariant: "restaurant",
    highlights: [
      "Réservation en direct avec créneau horaire et nombre de personnes",
      "Gestion de la carte, des réservations et des menus",
      "Envoi automatique des e-mails de confirmation",
    ],
    challenge: {
      problem:
        "Empêcher les surréservations lors des créneaux de forte affluence tout en prenant en compte les contraintes horaires d'ouverture et le nombre maximal de couverts par service.",
      solution:
        "Validation personnalisée sous Symfony ('ConstraintValidator') croisant l'historique des réservations actives via des requêtes Doctrine DQL ciblées avant persistance en base.",
    },
  },
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projets"
      className="w-full border-b border-[var(--ink)] bg-[var(--paper)] py-14 md:py-20"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex items-baseline gap-3 mb-10 pb-4 border-b border-[var(--ink)]">
          <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-none uppercase">
            PROJETS WEB & MOBILE
          </h2>
          <span className="font-mono-code text-xs md:text-sm font-semibold text-[var(--muted)]">
            (11)
          </span>
        </div>

        <div className="divide-y divide-[var(--ink)]">
          {CASE_STUDIES.map((p) => {
            return (
              <article
                key={p.id}
                className="group py-8 md:py-12 grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[400px_1fr] gap-6 md:gap-12 items-start"
              >
                {/* Illustration */}
                <div className="w-full aspect-[16/10] border border-[var(--ink)] bg-[#f7f5ef] relative overflow-hidden flex items-center justify-center p-6">
                  {p.shapeVariant === "nutriverif" && (
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      <div className="absolute top-2 w-4 h-6 rounded-tr-full rounded-bl-full bg-[var(--green)] mix-blend-multiply opacity-80 -rotate-12 transition-transform duration-500 group-hover:-translate-y-1" />
                      <div className="w-16 h-20 rounded-[50%_40%_50%_45%] bg-[var(--green)] mix-blend-multiply opacity-90 transition-transform duration-500 group-hover:-translate-x-2" />
                      <div className="w-16 h-20 rounded-[40%_50%_45%_50%] bg-[var(--red)] mix-blend-multiply opacity-90 -ml-8 transition-transform duration-500 group-hover:translate-x-2" />
                    </div>
                  )}
                  {p.shapeVariant === "diashop" && (
                    <div className="relative w-32 h-28 flex items-center justify-center">
                      <div
                        className="w-16 h-24 bg-[var(--green)] mix-blend-multiply opacity-90 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-rotate-6 relative"
                        style={{
                          clipPath:
                            "polygon(25% 0%, 75% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)",
                        }}
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-[#f7f5ef] mx-auto mt-2" />
                      </div>
                      <div
                        className="w-16 h-24 bg-[var(--red)] mix-blend-multiply opacity-90 -ml-8 transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-6 relative"
                        style={{
                          clipPath:
                            "polygon(25% 0%, 75% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)",
                        }}
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-[#f7f5ef] mx-auto mt-2" />
                      </div>
                    </div>
                  )}
                  {p.shapeVariant === "bibliotheque" && (
                    <div className="relative w-40 h-28 flex items-center justify-center">
                      <div className="w-16 h-20 bg-[var(--green)] mix-blend-multiply opacity-90 rounded-l skew-y-6 transition-transform duration-500 group-hover:-translate-x-2 group-hover:skew-y-3" />
                      <div className="w-16 h-20 bg-[var(--red)] mix-blend-multiply opacity-90 rounded-r -skew-y-6 -ml-1 transition-transform duration-500 group-hover:translate-x-2 group-hover:-skew-y-3" />
                      <div className="absolute w-[2px] h-16 bg-[var(--ink)]/40 pointer-events-none" />
                      <div className="absolute w-2 h-8 bg-[var(--ink)] top-12 transition-transform duration-500 group-hover:translate-y-2 pointer-events-none" />
                    </div>
                  )}
                  {p.shapeVariant === "restaurant" && (
                    <div className="relative w-36 h-28 flex items-center justify-center gap-4">
                      <div className="w-2 h-16 bg-[var(--green)] mix-blend-multiply opacity-80 rounded-full origin-bottom transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:-rotate-12" />
                      <div className="relative w-20 h-20 rounded-full border-4 border-[var(--red)] mix-blend-multiply opacity-90 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
                        <div className="w-16 h-16 rounded-full bg-[var(--green)] mix-blend-multiply opacity-75" />
                      </div>
                      <div className="w-2 h-16 bg-[var(--red)] mix-blend-multiply opacity-80 rounded-full origin-bottom transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:rotate-12" />
                    </div>
                  )}
                </div>

                {/* Contenu */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="font-mono-code text-xs md:text-sm text-[var(--muted)] font-bold">
                      {p.id}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mt-1 mb-2">
                      {p.title}
                    </h3>

                    <p className="text-sm md:text-base text-[var(--ink)]/90 max-w-xl leading-relaxed mb-4">
                      {p.desc}
                    </p>

                    {p.highlights && (
                      <ul className="mb-5 space-y-1 font-mono-code text-xs md:text-sm">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex gap-2">
                            <span
                              aria-hidden="true"
                              className="text-[var(--green)] font-bold"
                            >
                              →
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {p.challenge && (
                      <div className="mb-6 border border-[var(--ink)] bg-[#ede8dc] font-mono-code text-xs md:text-sm grid md:grid-cols-2 md:divide-x divide-y md:divide-y-0 divide-[var(--ink)]">
                        <div className="p-4">
                          <strong className="block mb-1 uppercase tracking-wider text-[var(--red)]">
                            Contrainte
                          </strong>
                          {p.challenge.problem}
                        </div>
                        <div className="p-4">
                          <strong className="block mb-1 uppercase tracking-wider text-[var(--green)]">
                            Résolution
                          </strong>
                          {p.challenge.solution}
                        </div>
                      </div>
                    )}
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
            href="https://github.com/salaahl/notepad_by_expressJS"
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 flex justify-between items-center hover:bg-black/5 px-2 transition-colors"
          >
            <span>05 BLOC-NOTES</span>
            <span>EXPRESSJS ↗</span>
          </a>
          <a
            href="https://github.com/salaahl/quizz_by_angular"
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 flex justify-between items-center hover:bg-black/5 px-2 transition-colors"
          >
            <span>06 QUIZZ</span>
            <span>ANGULAR ↗</span>
          </a>
          <a
            href="https://github.com/salaahl"
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 flex justify-between items-center hover:bg-black/5 px-2 text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
          >
            <span>07 + 4 AUTRES PROJETS</span>
            <span>VOIR TOUT →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
