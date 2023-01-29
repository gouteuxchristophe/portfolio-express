// Détection et background du menu de navigation
const navButton = document.querySelector(".dot");
const menuElt = document.querySelector('.nav');
const navContainer = document.querySelector('.nav_container');


  navButton.addEventListener("click", handleNavButton);

function handleNavButton(event) {
  menuElt.classList.toggle('active');
}

const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,

  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false
  // },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

const swiperTitle = new Swiper(".swiper-title", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  effect: 'flip',
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
},
});