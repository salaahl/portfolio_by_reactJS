const target = ['#about-me h2 span', '.project', '#contact h2 span'];

const options = {
  threshold: 1,
};

const observer = new IntersectionObserver(handleIntersection, options);
console.log(document.documentElement.clientWidth)
function handleIntersection(entries) {
  entries.map((entry) => {
    function animate() {
      entry.target.classList.add('animate');
    }
    if (entry.isIntersecting) {
      setTimeout(animate, 250)
    }
  });
}

window.addEventListener("load", () => {
  target.forEach((index) => {
    let container = document.querySelectorAll(index);
    if (container) {
      for (let i = 0; i < container.length; i++) {
        observer.observe(container[i]);
      }
    }
  });
});
