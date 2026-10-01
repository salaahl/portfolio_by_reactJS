import React from "react";

export const Services: React.FC = () => {
  return (
    <section
      id="expertise"
      className="w-full bg-[var(--green)] text-[var(--paper)] py-14 md:py-20 border-b border-[var(--ink)]"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* En-tête de section */}
        <div className="flex items-baseline gap-3 mb-10 pb-4 border-b border-[var(--paper)]/30">
          <h2 className="font-display text-[clamp(32px,4.5vw,64px)] leading-none uppercase">
            COMPÉTENCES & SYSTÈMES
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Colonne 1 */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4">
                DÉVELOPPEMENT WEB & MOBILE
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[var(--paper)]/90 max-w-lg mb-6">
                Conception d'applications complètes, de la modélisation des
                données jusqu'à la mise en production. Architecture logicielle
                robuste, APIs et interfaces soignées.
              </p>

              <ul className="space-y-3 font-mono-code text-xs md:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--paper)] font-bold">―</span>
                  <span>
                    <strong>Front-end :</strong> Vue.js, Flutter, TypeScript,
                    Tailwind CSS
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--paper)] font-bold">―</span>
                  <span>
                    <strong>Back-end :</strong> Symfony, Laravel, Django,
                    Node.js (Express)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--paper)] font-bold">―</span>
                  <span>
                    <strong>Data & DevOps :</strong> PostgreSQL, MySQL,
                    Merise/UML, Docker, CI/CD, Git
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--paper)]/20 font-mono-code text-xs text-[var(--paper)]/75">
              CONCEPTION MERISE/UML · ARCHITECTURE API · CI/CD & DOCKER
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-4">
                SAP FI/CO & FLUX FINANCIERS
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[var(--paper)]/90 max-w-lg mb-6">
                MCO du SI financier (SAP ECC 6), pilotage de la tierce
                maintenance applicative et traitement de flux de données massifs
                en environnement grand compte.
              </p>

              {/* Encadré Focus Facturation Électronique */}
              <div className="border border-[var(--paper)]/40 bg-black/10 p-5 mb-6 space-y-2.5">
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--paper)] flex items-center justify-between">
                  <span>FOCUS : RÉFORME FACTURATION ÉLECTRONIQUE</span>
                  <span className="text-[10px] bg-[var(--paper)] text-[var(--green)] px-1.5 py-0.5 font-bold">
                    PRODUCTION
                  </span>
                </div>
                <p className="text-xs md:text-sm leading-relaxed text-[var(--paper)]/90">
                  Pilotage TMA avec Accenture : rédaction, relecture et
                  validation des SFG/SFD, stratégie de recette et de
                  qualification, arbitrage des anomalies et élaboration du plan
                  de bascule en production.
                </p>
                <p className="text-xs md:text-sm leading-relaxed text-[var(--paper)]/90">
                  Traitement et fiabilisation de flux de données massifs pour
                  garantir l'intégrité des échanges comptables.
                </p>
              </div>

              <ul className="space-y-3 font-mono-code text-xs md:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--paper)] font-bold">―</span>
                  <span>
                    <strong>Cadrage & évolutions :</strong> Recueil des besoins
                    métiers, instruction des demandes d'évolution (SFG),
                    challenge des chiffrages intégrateur et recette applicative
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--paper)] font-bold">―</span>
                  <span>
                    <strong>Périmètre & MCO :</strong> Chaîne de la dépense et
                    de la recette, flux Chorus Pro, gestion des tiers et
                    incidents critiques N2/N3
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--paper)] font-bold">―</span>
                  <span>
                    <strong>Technique & diagnostic :</strong> Codage et débogage
                    ABAP autonome, création de transactions, requêtage SQL et
                    analyse de tables
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--paper)]/20 font-mono-code text-xs text-[var(--paper)]/75">
              PILOTAGE TMA · DÉBOGAGE ABAP · INCIDENTS N2/N3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
