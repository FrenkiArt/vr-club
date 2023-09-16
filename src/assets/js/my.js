import IMask from 'imask';

window.addEventListener('resize', function (e) {
  console.log(window.innerWidth);
});

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('input[type=tel]')) {
    telMasksTrigger();
  }

  const sliderZones = new Swiper('.slider-zones', {
    slidesPerView: 3,
    watchSlidesProgress: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    /*  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    } */
  });
});

function telMasksTrigger() {
  document.querySelectorAll('input[type=tel]').forEach((el) => {
    window.telArr = [];

    window.telArr.push(
      IMask(el, {
        mask: '+{7} 000 000 00 00',
      })
    );
  });
}
