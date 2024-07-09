window.onload = function () {
  // Fond d'écran de la partie "projets"
  window.Particles.init({
    selector: '#projects .background',
    color: ['#c6c6c6', '#303030'],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 1024,
        options: {
          maxParticles: 60,
        },
      },
      {
        breakpoint: 768,
        options: {
          maxParticles: 30,
        },
      },
    ],
  });

  // Boutons de la partie "projets"
  document.querySelector('#slide-left').onclick = () => {
    document.querySelector('#projects > .content').scrollLeft -= 200;
  };

  document.querySelector('#slide-right').onclick = () => {
    document.querySelector('#projects > .content').scrollLeft += 200;
  };
};
