import Swiper from "swiper";

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    '432':{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    '600': {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    '920': {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    '1024': {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    '1280': {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.swiper-arrow-left',
    prevEl: '.swiper-arrow-right',
  },
});

