import { gsap, ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

// Enregistrement des plugins
gsap.registerPlugin(ScrollTrigger);

// Configuration globale de GSAP
gsap.config({
  trialWarn: true, // Affiche un avertissement si un plug-in payant est utilisé
});
gsap.defaults({ ease: "power1.out" });

gsap.matchMedia().add("(min-width: 1024px)", () => {
  ScrollTrigger.defaults({
    scroller: ".App", // Conteneur de défilement personnalisé
  });
});

// Fonction pour changer le fond d'écran
function changeBackground(color) {
  gsap.to(".App", {
    backgroundColor: color,
    duration: 0, // Peut être ajusté si nécessaire
  });
}

function invertColor(bgColor) {
  gsap.to(".sticky-nav ul", {
    backgroundColor: bgColor,
    duration: 1, // Peut être ajusté si nécessaire
  });
}

// Création des animations ScrollTrigger
window.addEventListener("load", () => {
  // Animation de fond d'écran
  ScrollTrigger.create({
    trigger: "#projects > .header",
    start: "100% 100%",
    end: "100% 100%",
    onEnter: () => changeBackground("rgb(255, 255, 255, 0.5)"),
    onEnterBack: () => changeBackground("rgb(0, 0, 0, 1)"),
  });

  // Inversion des couleurs de la barre de navigation
  gsap.matchMedia().add("(max-width: 1023px)", () => {
    ScrollTrigger.create({
      trigger: "#projects > .header",
      start: "100% 100%",
      end: "100% 100%",
      onEnter: () => invertColor("rgb(0, 0, 0, 0.8)"),
      onEnterBack: () => invertColor("rgb(255, 255, 255, 0.15)"),
    });
  });

  // Animation de la flèche
  gsap.from("#home > .arrow", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#home",
      start: "0%",
      end: "25%",
      scrub: true,
    },
  });

  // Animation du paragraphe dans la section "à propos"
  new SplitType("#about-me p", {
    types: "lines, words, chars",
    tagName: "span",
  });

  gsap.from("#about-me p .word", {
    opacity: 0.1,
    duration: 0.5,
    stagger: 0.05,
    scrollTrigger: {
      trigger: "#about-me",
      start: window.innerWidth < 1024 ? "50% 75%" : "15% 50%",
      end: window.innerWidth < 1024 ? "75% 75%" : "50% 50%",
    },
  });

  // Animation du titre
  gsap.from("#services .header h2", {
    y: "200%",
    opacity: 0,
    duration: 0.5,
    delay: 0.25,
    scrollTrigger: {
      trigger: "#services .header",
      start: "0% 85%",
    },
  });

  // Animation de la taille du fond du h2
  gsap.fromTo(
    "#projects > .header > h2",
    {
      backgroundSize: "0% 100%",
    },
    {
      backgroundSize: "100% 100%",
      duration: 1,
      delay: 0.15,
      scrollTrigger: {
        trigger: "#projects > .header",
        start: "100% 100%",
        end: "0% 0%",
      },
    }
  );

  // Animation pour les projets en fonction de la taille de l'écran
  gsap.matchMedia().add("(max-width: 1023px)", () => {
    const projects = gsap.utils.toArray("#projects .project");
    projects.forEach((project) => {
      gsap.from(project, {
        pointerEvents: "none",
        y: "25%",
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: project.querySelector("img"),
          start: "50% 100%",
        },
      });
    });
  });

  gsap.matchMedia().add("(min-width: 1024px)", () => {
    gsap.from("#projects .project", {
      pointerEvents: "none",
      y: "25%",
      opacity: 0,
      duration: 0.5,
      delay: 0.25,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#projects > .header",
        start: "0% 1%",
      },
    });
  });

  // Animation des spans dans la section contact
  gsap.from("#contact h2 span", {
    opacity: 0,
    x: (index) => (index === 0 ? "-100%" : "100%"),
    delay: 0.15,
    scrollTrigger: {
      trigger: "#contact",
      start: "0% 50%",
      end: "50% 50%",
    },
  });
});
