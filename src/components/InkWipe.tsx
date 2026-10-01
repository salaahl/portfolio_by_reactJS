import React, { forwardRef } from "react";

export interface InkWipeRefs {
  greenPanel: HTMLDivElement | null;
  redPanel: HTMLDivElement | null;
}

export const InkWipe = forwardRef<InkWipeRefs>((_, ref) => {
  const gRef = React.useRef<HTMLDivElement>(null);
  const rRef = React.useRef<HTMLDivElement>(null);

  React.useImperativeHandle(ref, () => ({
    greenPanel: gRef.current,
    redPanel: rRef.current,
  }));

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[999] overflow-hidden"
      style={{ isolation: "isolate" }}
      aria-hidden="true"
    >
      {/* Panneau vert */}
      <div
        ref={gRef}
        className="absolute inset-0 bg-[var(--green)] will-change-transform"
        style={{
          transform: "translate3d(-101%, 0, 0)",
          backfaceVisibility: "hidden",
        }}
      />
      {/* Panneau rouge */}
      <div
        ref={rRef}
        className="absolute inset-0 bg-[var(--red)] will-change-transform"
        style={{
          transform: "translate3d(-101%, 0, 0)",
          backfaceVisibility: "hidden",
        }}
      />
    </div>
  );
});

InkWipe.displayName = "InkWipe";
