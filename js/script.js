
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

var swiper = new Swiper(".galeria-swiper", {
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

const galeriaContainer = document.querySelector('.galeria-container');
const popUpContainer = document.querySelector('.popup-container')
const popUp = document.querySelector('.popup');

galeriaContainer.addEventListener('click', function () {
  let alvo = event.target.classList.value.slice(-1); // Retorna a classe do elemento que foi clicado e graças o slice retorna somente o número final que nos interessa
  if (alvo <= 9) {
    popUp.attributes[0].value = `img/galeria-${alvo}-small.jpg`;
    popUpContainer.style.display = 'flex';
  }
})

const closePopUp = document.querySelector('.close-popup');
closePopUp.addEventListener('click', function () {
  popUpContainer.style.display = 'none';
})



