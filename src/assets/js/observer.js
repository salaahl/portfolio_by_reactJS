// or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
  /* animation : fond d'écran */
  var tl = gsap.timeline();
  tl.fromTo(
    '#root',
    {
      backgroundColor: 'rgb(0, 0, 0)',
      ease: 'power1.out',

      scrollTrigger: {
        trigger: '#about-me',
        start: '-150%',
        end: '33%',
        scrub: true,
      },
    },
    {
      backgroundColor: 'rgb(255, 255, 255)',
      ease: 'power1.out',

      scrollTrigger: {
        trigger: '#about-me',
        start: '33%',
        end: '33%',
        scrub: true,
      },
    }
  );

  tl.fromTo(
    '#root',
    {
      backgroundColor: 'rgb(255, 255, 255)',
      ease: 'power1.out',

      scrollTrigger: {
        trigger: '#contact',
        start: '-50%',
        end: '-50%',
        scrub: true,
      },
    },
    {
      backgroundColor: 'rgb(103, 175, 142)',
      ease: 'power1.out',

      scrollTrigger: {
        trigger: '#contact',
        start: '-50%',
        end: '0%',
        scrub: true,
      },
    }
  );

  /* animation : fadeIn */
  let target = [
    { name: '#home', start: '15% 50%' },
    { name: '#about-me', start: '15% 50%' },
    { name: '#projects > .header', start: '0% 75%' },
    { name: '#contact', start: '15% 50%' },
  ];
  for (let i = 0; i < target.length; i++) {
    gsap.from(target[i].name + '> *', {
      opacity: 0,
      y: '25%',
      duration: 0.5,
      ease: 'power1.out',

      scrollTrigger: {
        trigger: target[i].name,
        start: target[i].start,
        end: target[i].end ? target[i].end : false,
      },
    });
  }

  /* animation : arrow */
  gsap.to('#home > .arrow', {
    opacity: 0,
    ease: 'power1.out',

    scrollTrigger: {
      trigger: '#home',
      start: '0%',
      end: '50%',
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
      start: window.innerWidth < 1024 ? '50% 75%' : '0% 50%', // la zone de la div SURVEILLEE à partir de laquelle mon animation commence ET la position du curseur dans la div
      end: window.innerWidth < 1024 ? '80% 75%' : '50% 50%',
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
    },
    {
      backgroundSize: '100% 100%',
      ease: 'power1.out',
      stagger: 0.1,

      scrollTrigger: {
        trigger: '#about-me',
        start: '33% 0%',
        // end: window.innerWidth < 1024 ? '0% 0%' : '50% 100%',
        scrub: true,
      },
    }
  );

  /* animation isolée : mes projets */
  if (window.innerWidth < 1024) {
    const projects = gsap.utils.toArray('#projects .project');
    projects.forEach((project) => {
      gsap.from(project, {
        pointerEvents: 'none',
        y: '25%',
        opacity: 0,
        duration: 0.5,
        ease: 'power1.out',

        scrollTrigger: {
          trigger: project,
          start: '0% 75%',
          end: '100% 75%',
        },
      });
    });
  } else {
    gsap.from('#projects .project', {
      pointerEvents: 'none',
      y: '20%',
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out',
      stagger: 0.1,

      scrollTrigger: {
        trigger: '#projects > .content',
        start: '0% 25%',
        end: '100%',
      },
    });
  }

  /* animation isolée : contact */
  gsap.from('#contact h2 span:first-child', {
    opacity: 0, // l'opacité de départ de la balise span
    x: '-100%',
    ease: 'power1.out', // l'effet de l'animation

    scrollTrigger: {
      trigger: '#contact',
      start: '0% 50%',
      end: '50% 50%',
      scrub: true,
    },
  });

  gsap.from('#contact h2 span:last-child', {
    opacity: 0, // l'opacité de depart de la balise span
    x: '100%',
    ease: 'power1.out', // l'effet de l'animation

    scrollTrigger: {
      trigger: '#contact',
      start: '0% 50%',
      end: '50% 50%',
      scrub: true,
    },
  });

  document.querySelector('.loader').style.display = 'none';
});
