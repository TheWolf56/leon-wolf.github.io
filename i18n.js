(function () {
  function setLang(lang) {
    document.querySelectorAll('[data-de]').forEach(function (el) {
      el.textContent = el.dataset[lang];
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-switcher button').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('lang', lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = localStorage.getItem('lang') || 'de';
    setLang(saved);
    document.querySelectorAll('.lang-switcher button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.dataset.lang);
      });
    });
  });
}());
