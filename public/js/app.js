const swup = new Swup()



// Détection et background du menu de navigation
const navButton = document.querySelector(".dot");
const menuElt = document.querySelector(".nav");
const navContainer = document.querySelector(".nav_container");

navButton.addEventListener("click", handleNavButton);

function handleNavButton(event) {
  menuElt.classList.toggle("active");
}

// Slider page projects
const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  effect: "flip",
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false
  // },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Slider title
const swiperTitle = new Swiper(".swiper-title", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  effect: "flip",
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});



// Sécurisation du formulaire

const contactForm = document.querySelector("form");
if(contactForm) {
  contactForm.addEventListener("submit", checkForm);
}

function checkForm(e) {
  e.preventDefault();
  let error = 'Ce champ est vide';
  let regex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/
  let name = contactForm.elements["name"];
  let object = contactForm.elements["object"];
  let email = contactForm.elements["email"];
  let message = contactForm.elements["message"];

  if (name.value == '') {
    name.placeholder = error;
    name.focus()
    return false
  }
  if (object.value == '') {
    object.placeholder = error;
    object.focus()
    return false
  }
  if (regex.exec(email.value) == null) {
    email.placeholder = error
    email.focus()
    return false
}
if (message.value == '') {
  message.placeholder = error;
  message.focus()
  return false
}
  contactForm.submit();
}
