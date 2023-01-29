// Détection et background du menu de navigation
const navButton = document.querySelectorAll(".nav_button");

for (const button of navButton) {
  button.addEventListener("click", handleNavButton);
}

function handleNavButton(event) {
  const item = event.target;
  console.log(item.id);
  item.classList.add("active");
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