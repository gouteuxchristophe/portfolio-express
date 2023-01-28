const projectData = require('../../data/projects');

// Détection et background du menu de navigation
const navButton = document.querySelectorAll(".nav_button");
console.log(navButton);

for (const button of navButton) {
  button.addEventListener("click", handleNavButton);
}

function handleNavButton(event) {
  const item = event.target;
  console.log(item.id);
  item.classList.add("active");
}

// Création des cards projects

for (const project of projectData) {
    createProject(project);
  }
  

function createProject(project) {
  const swiperProjects = document.querySelector(".swiper-wrapper");
  // Récupération du bloc slide
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");
  swiperProjects.append(swiperSlide);

  // Création de la card
  const card = document.createElement("div");
  card.classList.add("card");
  swiperSlide.append(card);

  // Création du bloc image
  const cardImage = document.createElement("div");
  cardImage.classList.add("card__image");
  const imgProject = document.createElement("img");
  cardImage.append(imgProject);

  //Création du bloc span
  const cardLink = document.createElement("a");
  cardLink.classList.add("card__link");

  //Création du bloc title
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card__title");
  //Création du bloc description
  const cardDescription = document.createElement("div");
  cardDescription.classList.add("card_description");

  //Création du bloc de compétence
  const skillCardElt = document.createElement("div");
  skillCardElt.classList.add("card_language");
  for (let i = 0; i < project.languages.length; i++) {
    var skillLanguage = document.createElement("div");
    skillLanguage.classList.add("language_item");
    skillLanguage.textContent = project.languages[i];
    skillCardElt.append(skillLanguage);
  }
  // Contenu
  imgProject.src = `public/ressources/projects/${project.img}`;
  cardLink.textContent = "Lien vers le projet";
  cardLink.href = project.url;
  cardTitle.textContent = project.name;
  cardDescription.textContent = project.text;
  card.append(cardImage, cardLink, cardTitle, cardDescription, skillCardElt);
}
