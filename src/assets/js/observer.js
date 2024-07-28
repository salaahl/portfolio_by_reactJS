window.addEventListener('load', () => {
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
      root: document.querySelector('body'),
      threshold: 0.5,
    };
  } else {
    options = {
      root: document.querySelector('body'),
      threshold: 1,
    };
  }

  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, options);

  observer.root.style.border = "10px solid #44aa44";

  target.forEach((index) => {
    let container = document.querySelectorAll(index);
    if (container) {
      for (let i = 0; i < container.length; i++) {
        observer.observe(container[i]);
      }
    }
  });
});
