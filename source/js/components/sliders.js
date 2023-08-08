// import Swiper from '../vendor/swiper.js';

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  observer: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".info__swiper-pagination",
    clickable: true,
  },
});



