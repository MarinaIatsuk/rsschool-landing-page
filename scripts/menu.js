/* Menu category switching and scroll-to-category */
(function() {
  'use strict';

  function initCategories() {
    const container = document.querySelector('.categories');
    if (!container) return;

    const buttons = Array.from(container.querySelectorAll('.category-button'));
    const lists = Array.from(document.querySelectorAll('.catalog__list'));
    const header = document.querySelector('.header');

    function setActive(category) {
      buttons.forEach(btn => {
        const isActive = btn.dataset.category === category;
        btn.classList.toggle('category-button--active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
      });

      lists.forEach(list => {
        const show = list.dataset.category === category;
        if (show) {
          list.removeAttribute('hidden');
        } else {
          list.setAttribute('hidden', '');
        }
      });

      const target = document.getElementById('catalog-' + category);
      if (target) {
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
        window.scrollTo({ top, behavior: 'smooth' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        setActive(category);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', initCategories);
})();
