(function() {
  'use strict';

  const burgerButton = document.getElementById('burger-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const navLinks = mobileNav.querySelectorAll('.mobile-nav__link');
  const breakpoint = 768;


  burgerButton.addEventListener('click', function() {
   // console.log('кликнули на форму');

    const isOpen = burgerButton.classList.toggle('is-open');
    mobileNav.classList.toggle('is-open', isOpen);
    burgerButton.setAttribute('aria-expanded', isOpen);
  });

 
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      burgerButton.classList.remove('is-open');
      mobileNav.classList.remove('is-open');
      burgerButton.setAttribute('aria-expanded', 'false');
    });
  });


  window.addEventListener('resize', function() {
    if (window.innerWidth >= breakpoint) {
      burgerButton.classList.remove('is-open');
      mobileNav.classList.remove('is-open');
      burgerButton.setAttribute('aria-expanded', 'false');
    }
  });
})();
