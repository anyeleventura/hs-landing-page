
document.querySelector('html').classList = 'js';

var swiper = new Swiper(".serviços-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    lazy: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    breakpoints: {
      520: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });