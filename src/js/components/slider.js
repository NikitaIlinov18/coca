import Swiper from 'swiper/bundle';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    // loop: true,
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
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   draggable: true,
    // },
  });
};
