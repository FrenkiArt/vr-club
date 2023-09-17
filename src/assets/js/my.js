import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

/* window.addEventListener('resize', function (e) {
  console.log(window.innerWidth);
}); */

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('input[type=tel]')) {
    telMasksTrigger();
  }

  const sliderZones = new Swiper('.slider-zones', {
    watchSlidesProgress: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1400: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});
