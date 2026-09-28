(function() {
  'use strict';

  function initScrollTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;

    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.addEventListener('DOMContentLoaded', initScrollTop);
})();
