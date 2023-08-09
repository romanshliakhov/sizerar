// import Swiper from '../vendor/swiper.js';

// let swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   loop: true,
//   observer: true,
//   effect: "fade",
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".info__swiper-pagination",
//     clickable: true,
//   },
// });


for (const newsSlider of document.querySelectorAll('.mySwiper')) {
  if (newsSlider) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(max-width:575px)");
      let slider;

      const enableSwiper = function () {
        slider = new Swiper(newsSlider, {
          slidesPerView: 1,
          direction: "vertical",
          observer: true,
          observeParents: true,
          loop: true,
          effect: "fade",
          slideToClickedSlide: true,
          // autoplay: {
          //   delay: 4000,
          //   disableOnInteraction: false,
          // },
          pagination: {
            el: ".info__swiper-pagination",
            clickable: true,
          },
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);

          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }
}


