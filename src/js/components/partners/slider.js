import Swiper from 'swiper/bundle';
import 'swiper/css';

export const usePartnersSlider = () => {
  new Swiper('.partners__slider', {
    slidesPerView: 1.15,
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      340: {
        slidesPerView: 1.5,
      },
      381: {
        slidesPerView: 2.1,
      },
      412: {
        slidesPerView: 2.3,
      },
      486: {
        slidesPerView: 2.5,
      },
    },
  });
};
