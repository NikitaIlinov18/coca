import Swiper from 'swiper/bundle';
import 'swiper/css';

export const useAboutHeroSlider = () => {
  new Swiper('.abouthero__slider', {
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

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.team__next',
      prevEl: '.team__prev',
    },
    breakpoints: {
      411: {
        slidesPerView: 1.5,
      },
      641: {
        slidesPerView: 2,
      },
      815: {
        slidesPerView: 2.5,
      },
      993: {
        slidesPerView: 3,
      },
    }
  });
};
