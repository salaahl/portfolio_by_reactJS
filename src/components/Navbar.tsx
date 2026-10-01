import React, { useEffect, useState } from "react";

interface NavbarProps {
  onNavigate: (targetId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [crispMode, setCrispMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("salaha-crisp-mode") === "true";
    if (saved) {
      setCrispMode(true);
      document.documentElement.classList.add("crisp-mode");
    }
  }, []);

  const toggleCrispMode = () => {
    const nextState = !crispMode;
    setCrispMode(nextState);
    if (nextState) {
      document.documentElement.classList.add("crisp-mode");
      localStorage.setItem("salaha-crisp-mode", "true");
    } else {
      document.documentElement.classList.remove("crisp-mode");
      localStorage.setItem("salaha-crisp-mode", "false");
    }
  };

  const links = [
    { num: "01", label: "MOI", target: "moi" },
    { num: "02", label: "PROJETS", target: "projets" },
    { num: "03", label: "EXPERTISE", target: "expertise" },
    { num: "04", label: "CONTACT", target: "contact" },
  ];

  return (
    <header className="w-full border-b border-[var(--ink)] bg-[var(--paper)] sticky top-0 z-30">
      <nav
        aria-label="Navigation principale"
        className="max-w-[1400px] mx-auto px-4 md:px-8 py-3.5 flex justify-between items-center text-xs md:text-sm font-mono-code font-bold uppercase tracking-wider"
      >
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-block text-[var(--muted)]">
            S. SOKHONA
          </span>
          <button
            type="button"
            onClick={toggleCrispMode}
            aria-pressed={crispMode}
            aria-label="Effets"
            title="Effets"
            className={`border border-[var(--ink)] w-7 h-7 xs:w-auto xs:h-auto xs:px-2 xs:py-0.5 flex items-center justify-center text-[11px] transition-colors cursor-pointer ${
              crispMode
                ? "hover:bg-[var(--ink)] hover:text-[var(--paper)] text-[var(--ink)]"
                : "bg-[var(--ink)] text-[var(--paper)]"
            }`}
          >
            <span aria-hidden="true" className="xs:hidden">
              {crispMode ? "○" : "●"}
            </span>
            <span className="hidden xs:inline">
              {crispMode ? "○ EFFETS" : "● EFFETS"}
            </span>
          </button>
        </div>

        <ul className="flex items-center gap-3 sm:gap-8 ml-auto">
          {links.map((link) => (
            <li key={link.target}>
              <button
                type="button"
                onClick={() => onNavigate(link.target)}
                className="hover:text-[var(--green)] transition-colors py-1 cursor-pointer"
              >
                <span className="hidden sm:inline">{link.num} </span>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
