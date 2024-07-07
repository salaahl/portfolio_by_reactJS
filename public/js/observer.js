/*
const target = ['#about-me h2 span', '.project', '#contact h2 span'];

if (!'IntersectionObserver' in window &&
    !'IntersectionObserverEntry' in window &&
    !'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    target.forEach((selector) => {
      document.querySelectorAll(selector).forEach((ele) => {
        ele.classList.add('animate');
      })
    });
} else {
  const options = {
    threshold: 0.95,
  };
  
  const observer = new IntersectionObserver(handleIntersection, options);
  
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
  if(document.documentElement.clientWidth >= 1024) {
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
  }
}
*/
