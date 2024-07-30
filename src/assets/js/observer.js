// or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from 'gsap/all';
import SplitType from 'split-type';

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

window.addEventListener('load', () => {
  /* animation isolée : fond d'écran */
  gsap.fromTo(
    '#root',
    {
      backgroundColor: 'rgb(0, 0, 0)',
      ease: 'power1.out',

      scrollTrigger: {
        trigger: '#about-me',
        start: '-10%',
        end: '75%',
        scrub: true,
      },
    },
    {
      backgroundColor: 'rgb(0, 0, 0)',
      ease: 'power1.out',

      scrollTrigger: {
        trigger: '#about-me',
        start: '-10%',
        end: '75%',
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    '#root',
    {
      backgroundColor: 'rgb(255, 255, 255)',
      ease: 'power1.out',

      scrollTrigger: {
        trigger: '#projects',
        start: '-25%',
        end: '100%',
        scrub: true,
      },
    },
    {
      backgroundColor: 'rgb(255, 255, 255)',
      ease: 'power1.out',

      scrollTrigger: {
        trigger: '#projects',
        start: '-25%',
        end: '100%',
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    '#root',
    {
      backgroundColor: 'rgb(103, 175, 142)',
      ease: 'power1.out',

      scrollTrigger: {
        trigger: '#contact',
        start: '0%',
        end: '100%',
        scrub: true,
      },
    },
    {
      backgroundColor: 'rgb(103, 175, 142)',
      ease: 'power1.out',

      scrollTrigger: {
        trigger: '#contact',
        start: '0%',
        end: '50%',
        scrub: true,
      },
    }
  );

  /* animation isolée : arrow */
  gsap.to('#home > .arrow', {
    opacity: 0,
    ease: 'power1.out',

    scrollTrigger: {
      trigger: '#home',
      start: '0%',
      end: '25%',
      scrub: true,
    },
  });

  // fade de mes div
  let target = ['#home', '#about-me', '#contact'];
  for (let i = 0; i < target.length; i++) {
    gsap.from(target[i] + '> *:first-child', {
      opacity: 0,
      y: 250,
      duration: 0.5,
      ease: 'power1.out',

      scrollTrigger: {
        trigger: target[i],
        start: 'top center',
        end: '+=50%',
      },
    });
  }

  /* animation isolée : paragraphe de la section "apropos" */
  // 1er paramètre : la div à découper
  let typeSplit = new SplitType('#about-me p', {
    types: 'lines, words, chars', // words : mots, "lines" : lignes et "chars" : caractères. Les 3 sont combinables comme ici
    tagName: 'span', // les mots seront mis dans des balises span
  });

  gsap.from('#about-me p .word', {
    opacity: 0.3, // l'opacité de départ de la balise span
    duration: 0.5, // la duree de l'animation
    ease: 'power1.out', // l'effet de l'animation
    stagger: 0.1, // équivaut à un animation-delay, va mettre 0.1 entre chaque mot

    scrollTrigger: {
      trigger: '#about-me', // la div à surveiller pour lancer l'animation
      start: '0% 50%', // la zone de la div à partir de laquelle mon animation commence ET la position du curseur dans la div
      end: '50% 50%',
      scrub: true, // l'animation suit le scroll
    },
  });

  /* animation isolée : mes projets */
  gsap.fromTo(
    '#projects > .header > h2',
    {
      backgroundSize: '0% 100%',
      ease: 'power1.out',
      stagger: 0.1,

      scrollTrigger: {
        trigger: '#projects > .header',
        start: '0% 25%',
        scrub: true,
      },
    },
    {
      backgroundSize: '100% 100%',
      ease: 'power1.out',
      stagger: 0.1,

      scrollTrigger: {
        trigger: '#projects > .header',
        start: '25% 50%',
        end: '100% 50%',
        scrub: true,
      },
    }
  );

  /* animation isolée : mes projets */
  gsap.from('#projects .project', {
    y: '20%',
    opacity: 0,
    duration: 0.5,
    ease: 'power1.out',
    stagger: 0.1,

    scrollTrigger: {
      trigger: '#projects > .header > h2',
      start: '0%',
      end: '100%',
    },
  });

  /* animation isolée : contact */
  gsap.from('#contact h2 span:first-child', {
    opacity: 0, // l'opacité de départ de la balise span
    x: -250,
    ease: 'power1.out', // l'effet de l'animation

    scrollTrigger: {
      trigger: '#contact',
      start: '-50%',
      end: '0%',
      scrub: true,
    },
  });

  gsap.from('#contact h2 span:last-child', {
    opacity: 0, // l'opacité de depart de la balise span
    x: 250,
    ease: 'power1.out', // l'effet de l'animation

    scrollTrigger: {
      trigger: '#contact',
      start: '-50%',
      end: '0%',
      scrub: true,

      markers: {
        startColor: 'pink',
        endColor: 'blue',
        fontSize: '4rem',
        indent: 100,
        fontWeight: 'bold',
      },
    },
  });

  /* onload */
  setTimeout(() => {
    document.querySelector('#loader').style.display = 'none';
  }, 1000);
});
