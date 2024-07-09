import Particles from './particles.min.js';

window.onload = function () {
  Particles.init({
    selector: '.background',
    speed: 0.2,
    color: ['#c6c6c6', '#303030'],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 1024,
        options: {
          maxParticles: 30,
        },
      },
      {
        breakpoint: 768,
        options: {
          maxParticles: 15,
        },
      },
    ],
  });
};
