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
  var TestSwiper = new Swiper('.testimonials__slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.testimonials__next',
      prevEl: '.testimonials__prev',
    },
  });
};

export const useAboutHeroSlider = () => {
  var TestSwiper = new Swiper('.abouthero__slider', {
    slidesPerView: 1.05,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.abouthero__next',
      prevEl: '.abouthero__prev',
    },
    breakpoints: {
      1391: {
        slidesPerView: 2.53,
      },
      1321: {
        slidesPerView: 2.58,
      },
      1281: {
        slidesPerView: 2.6,
      },
      1217: {
        slidesPerView: 2.62,
      },
      1201: {
        slidesPerView: 2.65,
      },
      993: {
        slidesPerView: 2.5,
      },
      769: {
        slidesPerView: 2.3,
      },
      577: {
        slidesPerView: 1.5,
      },
    },
  });
};