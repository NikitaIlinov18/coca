import Swiper from 'swiper/bundle';
import 'swiper/css';

export const useBlogHeroSlider = () => {
  new Swiper('.bloghero__slider', {
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
