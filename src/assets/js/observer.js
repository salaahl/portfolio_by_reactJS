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
    threshold: 0.5,
  };
} else {
  options = {
    threshold: 1,
  };
}

const observer = new IntersectionObserver(handleIntersection, options);

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1.0;
      entry.target.classList.add('animate');
    }
  });
}

window.addEventListener('load', () => {
  target.forEach((index) => {
    let container = document.querySelectorAll(index);
    if (container) {
      for (let i = 0; i < container.length; i++) {
        observer.observe(container[i]);
        alert(target[0]);
      }
    }
  });
});
