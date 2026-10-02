import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Marquee } from "./components/Marquee";
import { Projects } from "./components/Projects";
import { Services } from "./components/Expertise";
import { Contact } from "./components/Contact";
import { InkWipe, InkWipeRefs } from "./components/InkWipe";
import { RegistrationRipple } from "./components/RegistrationRipple";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const wipeRef = useRef<InkWipeRefs>(null);
  const isTransitioning = useRef(false);

  // Velocity Jitter : décalage d'encre lié à la vitesse de scroll
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const trigger = ScrollTrigger.create({
      onUpdate: (self) => {
        const vel = Math.abs(self.getVelocity() / 25000);
        const jitter = Math.min(vel, 0.05);

        document.documentElement.style.setProperty("--v-offset", `${jitter}em`);

        gsap.to(document.documentElement, {
          "--v-offset": "0em",
          duration: 0.45,
          ease: "power2.out",
          overwrite: "auto",
        });
      },
    });

    function setHeaderState(isInsideExpertise: boolean) {
      gsap.to("header", {
        backgroundColor: isInsideExpertise
          ? "rgba(255, 255, 255, 0.25)"
          : "rgb(241, 237, 227)",
        backdropFilter: isInsideExpertise ? "blur(4px)" : "blur(0px)",
        duration: 0.4,
        ease: "power2.out",
      });
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#expertise",
        start: "top top",
        end: "bottom top",
        onEnter: () => setHeaderState(true),
        onLeave: () => setHeaderState(false),
        onEnterBack: () => setHeaderState(true),
        onLeaveBack: () => setHeaderState(false),
      });
    });

    return () => trigger.kill();
  }, []);

  const handleNavigate = (targetId: string) => {
    if (isTransitioning.current) return;

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (
      prefersReducedMotion ||
      !wipeRef.current?.greenPanel ||
      !wipeRef.current?.redPanel
    ) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const { greenPanel, redPanel } = wipeRef.current;
    isTransitioning.current = true;

    const targetTop =
      targetElement.getBoundingClientRect().top + window.scrollY - 50;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut", force3D: true },
      onComplete: () => {
        gsap.set([greenPanel, redPanel], { x: 0, xPercent: -101 });
        isTransitioning.current = false;
      },
    });

    tl.set([greenPanel, redPanel], { x: 0, xPercent: -101 })
      .to(greenPanel, { xPercent: 0, duration: 0.5 }, 0)
      .to(redPanel, { xPercent: 0, duration: 0.5 }, 0.12)
      .add(() => {
        window.scrollTo({
          top: targetTop,
          left: 0,
          behavior: "instant" as ScrollBehavior,
        });
      }, 0.64)
      .to(redPanel, { xPercent: 101, duration: 0.5 }, 0.66)
      .to(greenPanel, { xPercent: 101, duration: 0.5 }, 0.78);
  };

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] relative">
      <RegistrationRipple />
      <InkWipe ref={wipeRef} />
      <Navbar onNavigate={handleNavigate} />
      <main>
        <Home onNavigate={handleNavigate} />
        <AboutMe />
        <Marquee />
        <Projects />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
