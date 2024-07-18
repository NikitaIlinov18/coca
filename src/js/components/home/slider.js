import Swiper from 'swiper/bundle';
import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlides: true,
    navigation: {
      nextEl: '.insight__next',
      prevEl: '.insight__prev',
    },
    scrollbar: {
      el: '.insight__scrollbar',
      draggable: true,
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.testimonials__next',
      prevEl: '.testimonials__prev',
    },
  });
};
