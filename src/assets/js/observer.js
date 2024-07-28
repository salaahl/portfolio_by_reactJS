if (window.innerWidth > 1023) {
  window.addEventListener('load', () => {
    const target = [
      '#home > svg',
      '#about-me > .content > p',
      '#projects > .header',
      '.project',
      '#contact > .content',
    ];

    let options = {
      threshold: 1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    function handleIntersection(entries) {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }

    target.forEach((index) => {
      let container = document.querySelectorAll(index);
      if (container) {
        for (let i = 0; i < container.length; i++) {
          observer.observe(container[i]);
        }
      }
    });
  });
}
