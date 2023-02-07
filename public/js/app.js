const swup = new Swup();

const initApp = () => {
  
  /* Affichage alternatif de l'underscore */
  $(document).ready(function() {
    setInterval(function() {
      $(".terminal_underscore").toggleClass("active");
    }, 500);
  });
  /* Slide des projets */
  swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    effect: "flip",
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
  /* Slide du titre page About */
  swiperTitle = new Swiper(".swiper-title", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    effect: "flip",
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
};

/* Appel de la fonction init à chaque fin de transition pour relance cette partie du JS */
swup.on("transitionEnd", function () {
  initApp();
});

/* Appel de la fonction init au chargement du DOM */
initApp();


/* Gestion des inputs du formulaire et vérification */
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", checkForm);
}

function checkForm(e) {
  e.preventDefault();
  let error = "Ce champ est vide";
  let regex =
    /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
  let name = contactForm.elements["name"];
  let object = contactForm.elements["object"];
  let email = contactForm.elements["email"];
  let message = contactForm.elements["message"];

  if (name.value == "") {
    name.placeholder = error;
    name.focus();
    return false;
  }
  if (object.value == "") {
    object.placeholder = error;
    object.focus();
    return false;
  }
  if (regex.exec(email.value) == null) {
    email.placeholder = error;
    email.focus();
    return false;
  }
  if (message.value == "") {
    message.placeholder = error;
    message.focus();
    return false;
  }
  contactForm.submit();
}
