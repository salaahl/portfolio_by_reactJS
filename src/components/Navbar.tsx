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
    { label: "01 MOI", target: "moi" },
    { label: "02 PROJETS", target: "projets" },
    { label: "03 EXPERTISE", target: "expertise" },
    { label: "04 CONTACT", target: "contact" },
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
            className={`border border-[var(--ink)] px-2 py-0.5 text-[11px] transition-colors cursor-pointer ${
              crispMode
                ? "bg-[var(--ink)] text-[var(--paper)]"
                : "hover:bg-[var(--ink)] hover:text-[var(--paper)] text-[var(--ink)]"
            }`}
          >
            {crispMode ? "● ENCRE NETTE" : "○ ENCRE NETTE"}
          </button>
        </div>

        <ul className="flex items-center gap-4 sm:gap-8 ml-auto">
          {links.map((link) => (
            <li key={link.target}>
              <button
                type="button"
                onClick={() => onNavigate(link.target)}
                className="hover:text-[var(--green)] transition-colors py-1 cursor-pointer"
              >
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
