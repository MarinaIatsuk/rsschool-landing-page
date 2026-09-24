 //снова извиняюсь, но на css слайдер тоже не смога нормально сделать, только время потратила и сдаю работу как есть до дедлайна, поэтому вот скрипт
 (function () {
        const slider = document.querySelector('.slider');
        if (!slider) return;

        const track = slider.querySelector('.slider__track');
        const slides = Array.from(slider.querySelectorAll('.slider__card'));
        const prevButton = slider.querySelector('.slider__nav--prev');
        const nextButton = slider.querySelector('.slider__nav--next');
        const dots = Array.from(slider.querySelectorAll('.slider__dot'));
        let currentIndex = 0;

        function renderSlider(index) {
          currentIndex = (index + slides.length) % slides.length;
          track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';

          slides.forEach(function (slide, slideIndex) {
            slide.classList.toggle('is-active', slideIndex === currentIndex);
          });

          dots.forEach(function (dot, dotIndex) {
            const isActive = dotIndex === currentIndex;
            dot.classList.toggle('is-active', isActive);
            dot.setAttribute('aria-pressed', String(isActive));
          });
        }

        prevButton.addEventListener('click', function () {
          renderSlider(currentIndex - 1);
        });

        nextButton.addEventListener('click', function () {
          renderSlider(currentIndex + 1);
        });

        dots.forEach(function (dot) {
          dot.addEventListener('click', function () {
            renderSlider(Number(dot.dataset.slide));
          });
        });

        renderSlider(0);
      })();
