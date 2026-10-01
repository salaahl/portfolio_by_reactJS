import React, { useEffect, useState } from "react";

interface RipplePoint {
  id: number;
  x: number;
  y: number;
}

export const RegistrationRipple: React.FC = () => {
  const [ripples, setRipples] = useState<RipplePoint[]>([]);

  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const newRipple: RipplePoint = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev.slice(-4), newRipple]);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[998] overflow-hidden"
      aria-hidden="true"
    >
      {ripples.map((r) => (
        <div
          key={r.id}
          style={{ left: r.x, top: r.y }}
          className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 animate-riso-ripple"
          onAnimationEnd={() =>
            setRipples((prev) => prev.filter((item) => item.id !== r.id))
          }
        >
          {/* Mire verte */}
          <div className="absolute inset-0 -translate-x-[2px] -translate-y-[2px] rounded-full border border-[var(--green)] mix-blend-multiply flex items-center justify-center">
            <div className="w-full h-[1px] bg-[var(--green)]/60 absolute" />
            <div className="h-full w-[1px] bg-[var(--green)]/60 absolute" />
          </div>
          {/* Mire rouge */}
          <div className="absolute inset-0 translate-x-[2px] translate-y-[2px] rounded-full border border-[var(--red)] mix-blend-multiply flex items-center justify-center">
            <div className="w-full h-[1px] bg-[var(--red)]/60 absolute" />
            <div className="h-full w-[1px] bg-[var(--red)]/60 absolute" />
          </div>
        </div>
      ))}
    </div>
  );
};
