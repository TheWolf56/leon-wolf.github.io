(function () {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  function revealAll() {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    revealAll();
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        var el = entry.target;
        setTimeout(function () { el.classList.add('is-visible'); }, i * 60);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 40px 0px' });

  items.forEach(function (el) { observer.observe(el); });

  /* Safety net: never leave content permanently invisible if the
     observer fails to fire (e.g. non-composited/headless viewports). */
  setTimeout(revealAll, 1200);
}());
