const target = [
  '#home > svg',
  '#about-me > .content > *',
  '#projects > .header',
  '.project',
  '#contact > .content',
];

const options = {
  threshold: 0.4,
};

const observer = new IntersectionObserver(handleIntersection, options);

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
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
      }
    }
  });
});
