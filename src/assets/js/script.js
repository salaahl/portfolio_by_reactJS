/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
window.onload = function () {
  window.particlesJS.load(
    'particles-js',
    'src/assets/js/particles.json',
    function () {
      console.log('callback - particles.js config loaded');
    }
  );
};
