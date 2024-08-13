import { gsap, ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';

// Enregistrement des plugins
gsap.registerPlugin(ScrollTrigger);

// Configuration globale de GSAP
gsap.config({
  trialWarn: true, // Affiche un avertissement si un plug-in payant est utilisé
});
gsap.defaults({ ease: 'power1.out' });

// Fonction pour changer le fond d'écran
function changeBackground(color) {
  gsap.to('#root', {
    backgroundColor: color,
    duration: 0, // Peut être ajusté si nécessaire
    ease: 'power1.out',
  });
}

// Création des animations ScrollTrigger
window.addEventListener('load', () => {
  // Animation de fond d'écran
  ScrollTrigger.create({
    trigger: '#projects > .header',
    start: '100% 100%',
    end: '100% 100%',
    onEnter: () => changeBackground('rgb(255, 255, 255)'),
    onEnterBack: () => changeBackground('rgb(0, 0, 0)'),
  });

  ScrollTrigger.create({
    trigger: '#contact',
    start: '100% 100%',
    end: '100% 100%',
    onEnter: () => changeBackground('rgb(103, 175, 142)'),
    onEnterBack: () => changeBackground('rgb(255, 255, 255)'),
  });

  // Animation des cibles
  const targets = [
    { name: '#home', start: '15% 50%' },
    { name: '#about-me', start: '15% 50%' },
    { name: '#projects > .header', start: '100% 100%' },
    { name: '#contact', start: '15% 50%' },
  ];

  targets.forEach(({ name, start }) => {
    gsap.from(`${name} > *`, {
      opacity: 0,
      y: '25%',
      duration: 0.5,
      scrollTrigger: {
        trigger: name,
        start,
      },
    });
  });

  // Animation de la flèche
  gsap.from('#home > .arrow', {
    opacity: 1,
    scrollTrigger: {
      trigger: '#home',
      start: '0%',
      end: '25%',
      scrub: true,
    },
  });

  // Animation du paragraphe dans la section "à propos"
  new SplitType('#about-me p', {
    types: 'lines, words, chars',
    tagName: 'span',
  });

  gsap.from('#about-me p .word', {
    opacity: 0.1,
    duration: 0.5,
    ease: 'power1.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '#about-me',
      start: window.innerWidth < 1024 ? '50% 75%' : '15% 50%',
      end: window.innerWidth < 1024 ? '75% 75%' : '50% 50%',
      scrub: true,
    },
  });

  // Animation de la taille du fond du h2
  gsap.fromTo(
    '#projects > .header > h2',
    { backgroundSize: '0% 100%' },
    {
      backgroundSize: '100% 100%',
      scrollTrigger: {
        trigger: '#projects > .header',
        start: '100% 100%',
        end: '0% 0%',
        scrub: true,
      },
    }
  );

  // Animation pour les projets en fonction de la taille de l'écran
  gsap.matchMedia().add('(max-width: 1023px)', () => {
    const projects = gsap.utils.toArray('#projects .project');
    projects.forEach((project) => {
      gsap.from(project, {
        pointerEvents: 'none',
        y: '25%',
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: project.querySelector('img'),
          start: '50% 100%',
        },
      });
    });
  });

  gsap.matchMedia().add('(min-width: 1024px)', () => {
    gsap.from('#projects .project', {
      pointerEvents: 'none',
      y: '25%',
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#projects > .header',
        start: '0% 0%',
      },
    });
  });

  // Animation des spans dans la section contact
  gsap.from('#contact h2 span', {
    opacity: 0,
    x: (index) => (index === 0 ? '-100%' : '100%'),
    scrollTrigger: {
      trigger: '#contact',
      start: '0% 50%',
      end: '50% 50%',
      scrub: true,
    },
  });
});
