// or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger);

gsap.config({
  trialWarn: true, // Affiche un avertissement dans la console si j'utilise un plug-in payant
});
gsap.defaults({ ease: 'power1.out' });
let mm = gsap.matchMedia();

window.addEventListener('load', () => {
  /* animation : fond d'écran */
  gsap.to('#root', {
    backgroundColor: 'rgba(0, 0, 0, 1)',

    scrollTrigger: {
      trigger: '#home',
      start: '0% 100%',
      end: '100% 100%',
      scrub: true,
    },
  });

  gsap.to('#root', {
    backgroundColor: 'rgba(255, 255, 255, 1)',

    scrollTrigger: {
      trigger: '#projects > .header',
      start: '100% 100%',
      end: '100% 100%',
      scrub: true,
    },
  });

  gsap.to('#root', {
    backgroundColor: 'rgba(255, 255, 255, 1)',

    scrollTrigger: {
      trigger: '#projects > .header',
      start: '100% 100%',
      end: '100% 100%',
      scrub: true,
    },
  });

  gsap.from('#root', {
    backgroundColor: 'rgba(255, 255, 255, 1)',

    scrollTrigger: {
      trigger: '#contact',
      start: '100% 0%',
      end: '100% 0%',
      scrub: true,
    },
  });

  gsap.to('#root', {
    backgroundColor: 'rgba(103, 175, 142, 1)',

    scrollTrigger: {
      trigger: '#contact',
      start: '100% 100%',
      end: '100% 100%',
      scrub: true,
    },
  });

  /* animation : fadeIn */
  let target = [
    { name: '#home', start: '15% 50%' },
    { name: '#about-me', start: '15% 50%' },
    { name: '#projects > .header', start: '100% 100%' },
    { name: '#contact', start: '15% 50%' },
  ];

  for (let i = 0; i < target.length; i++) {
    gsap.from(target[i].name + '> *', {
      opacity: 0,
      y: '25%',
      duration: 0.5,

      scrollTrigger: {
        trigger: target[i].name,
        start: target[i].start,
      },
    });
  }

  /* animation : arrow */
  gsap.from('#home > .arrow', {
    opacity: 1,

    scrollTrigger: {
      trigger: '#home',
      start: '0%',
      end: '25%',
      scrub: true,
    },
  });

  /* animation isolée : paragraphe de la section "apropos" */
  // 1er paramètre : la div à découper
  let typeSplit = new SplitType('#about-me p', {
    types: 'lines, words, chars', // words : mots, "lines" : lignes et "chars" : caractères. Les 3 sont combinables comme ici
    tagName: 'span', // les mots seront mis dans des balises span
  });

  gsap.from('#about-me p .word', {
    opacity: 0.1, // l'opacité de départ de la balise span
    duration: 0.5, // la duree de l'animation
    ease: 'power1.out', // l'effet de l'animation
    stagger: 0.1, // équivaut à un animation-delay, va mettre 0.1 entre chaque mot

    scrollTrigger: {
      trigger: '#about-me', // la div à surveiller pour lancer l'animation
      start: window.innerWidth < 1024 ? '50% 75%' : '15% 50%', // la zone de la div SURVEILLEE à partir de laquelle mon animation commence ET la position du curseur dans la fenêtre
      end: window.innerWidth < 1024 ? '75% 75%' : '50% 50%',
      scrub: true, // l'animation suit le scroll
    },
  });

  /* animation isolée : mes projets */
  gsap.fromTo(
    '#projects > .header > h2',
    {
      backgroundSize: '0% 100%',
      stagger: 0.1,

      scrollTrigger: {
        trigger: '#projects > .header',
        start: '100% 100%',
        end: '0% 0%',
        scrub: true,
      },
    },
    {
      backgroundSize: '100% 100%',
      stagger: 0.1,

      scrollTrigger: {
        trigger: '#projects > .header',
        start: '100% 100%',
        end: '0% 0%',
        scrub: true,
      },
    }
  );

  /* animation isolée : mes projets */
  mm.add('(max-width: 1023px)', () => {
    const projects = gsap.utils.toArray('#projects .project');
    projects.forEach((project) => {
      gsap.from(project, {
        pointerEvents: 'none',
        y: '25%',
        opacity: 0,
        duration: 0.5,

        scrollTrigger: {
          trigger: project,
          start: '0% 75%',
          end: '100% 75%',
        },
      });
    });
  });

  mm.add('(min-width: 1024px)', () => {
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

  /* animation isolée : contact */
  gsap.from('#contact h2 span:first-child', {
    opacity: 0,
    x: '-100%',

    scrollTrigger: {
      trigger: '#contact',
      start: '0% 50%',
      end: '50% 50%',
      scrub: true,
    },
  });

  gsap.from('#contact h2 span:last-child', {
    opacity: 0,
    x: '100%',

    scrollTrigger: {
      trigger: '#contact',
      start: '0% 50%',
      end: '50% 50%',
      scrub: true,
    },
  });
});
