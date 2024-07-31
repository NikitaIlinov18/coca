import Swiper from 'swiper/bundle';
import 'swiper/css';

export const useBlogHeroSlider = () => {
  const blogSwiper = new Swiper('.bloghero__slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.bloghero__next',
      prevEl: '.bloghero__prev',
    },
    breakpoints: {
      577: {
        slidesPerView: 1.5,
      },
      769: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 2.5,
      },
    },
  });
};

export const useTabFilter = () => {
  const tabs = document.querySelectorAll('.hero__tabs-link');
  const slides = document.querySelectorAll('.bloghero__article');
  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      if (tab.classList.contains('hero__tabs-link--active')) {
        return;
      }

      tabs.forEach((item) => {
        item.classList.remove('hero__tabs-link--active');
      });

      tab.classList.add('hero__tabs-link--active');

      const tabValue = tab.getAttribute('data-tab');

      if (tabValue) {
        slides.forEach((slide) => {
          if (slide.getAttribute('data-rubric') !== tabValue) {
            slide.classList.add('none');
            slide.classList.remove('swiper-slide');
          } else {
            slide.classList.remove('none');
            slide.classList.add('swiper-slide');
          }
        });
      } else {
        slides.forEach((slide) => {
          slide.classList.remove('none');
          slide.classList.add('swiper-slide');
        });
      }
      blogSwiper.update();
    });
  });
};

export const useBottomSlider = () => {
  new Swiper('.bottom__slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: '.bottom__next',
      prevEl: '.bottom__prev',
    },
    breakpoints: {
      577: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 2.5,
      },
      993: {
        slidesPerView: 3,
      },
    },
  });
};
