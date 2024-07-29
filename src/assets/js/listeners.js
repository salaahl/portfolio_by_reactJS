window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('#loader').style.display = 'none';
    document
      .querySelectorAll('.App > *:not(#loader)')
      .forEach((el) => (el.style.opacity = '1'));
  }, 1000);
});
