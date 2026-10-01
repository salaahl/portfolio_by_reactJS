import React from "react";

export const Services: React.FC = () => {
  return (
    <section
      id="expertise"
      className="w-full bg-[var(--green)] text-[var(--green-ink)] border-b border-[var(--ink)] py-16 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Colonne 1 : Développement */}
        <div className="min-w-0">
          <h2 className="font-display text-[clamp(32px,4.5vw,64px)] leading-none uppercase tracking-tight mb-4 break-words">
            DÉVELOPPEMENT
          </h2>
          <p className="text-sm md:text-base lg:text-lg leading-[1.6] max-w-lg font-medium opacity-90">
            Applications web sur mesure, e-commerce, API. Du prototype à la mise
            en ligne.
          </p>
        </div>

        {/* Colonne 2 : SAP FI/CO */}
        <div className="min-w-0">
          <h2 className="font-display text-[clamp(32px,4.5vw,64px)] leading-none uppercase tracking-tight mb-4 break-words">
            SAP FI/CO
          </h2>
          <p className="text-sm md:text-base lg:text-lg leading-[1.6] max-w-lg font-medium opacity-90">
            Finance publique, analyse fonctionnelle, débogage ABAP et résolution
            d'incidents complexes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;