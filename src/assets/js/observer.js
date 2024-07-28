const target = [
  '#home > svg',
  '#about-me > .content > p',
  '#projects > .header',
  '.project',
  '#contact > .content',
];

let options;

if (window.innerWidth < 1024) {
  options = {
    root:null,
    rootMargin:'0px',
    threshold: 0.1,
  };
} else {
  options = {
    root:null,
    rootMargin:'0px',
    threshold: 0.1,
  };
}

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1.0;
      entry.target.classList.add('animate');
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, options);

window.addEventListener('load', () => {
  if ('IntersectionObserver' in window) {
    alert('oui.');
    console.log(observer)

    // Ajoutez vos éléments à observer ici, par exemple :
    // observer.observe(document.querySelector('.element-to-observe'));
  } else {
    // Fallback pour les navigateurs qui ne supportent pas IntersectionObserver
    alert('IntersectionObserver n’est pas pris en charge par ce navigateur.');
    // Vous pouvez implémenter un polyfill ou une autre solution ici
  }

  target.forEach((index) => {
    let container = document.querySelector(index);
    observer.observe(container);


    if (container) {

      for (let i = 0; i < container.length; i++) {
        observer.observe(container[i]);
      }
    } else {
      alert('non');

    }
  });
});
