// Import du dataMapper (SQL)
const dataMapper = require("../dataMapper");

// Objet du controller
const controller = {
  pageHome: async (req, res) => {
    try {
      const about = await dataMapper.getAbout();
      res.locals.navPage = "about"; // Permet la dynamisation du menu
      res.render("about", { about });
    } catch (error) {
      res.status(500);
      res.render("error/500", { navPage: "" });
    }
  },
  pageSkills: async (req, res) => {
    try {
      const skillsFront = await dataMapper.getSkills("front-end");
      const skillsBack = await dataMapper.getSkills("back-end");
      const skillsGest = await dataMapper.getSkills("gestion");
      res.locals.navPage = "skills"; // Permet la dynamisation du menu
      res.render("skills", { skillsFront, skillsBack, skillsGest });
    } catch (error) {
      res.status(500);
      res.render("errors/500", { navPage: "" });
    }
  },
  pageProjects: async (req, res) => {
    try {
      const projects = await dataMapper.getAllProjects();
      res.locals.navPage = "projects"; // Permet la dynamisation du menu
      res.render("projects", { projects });
    } catch (error) {
      res.status(500);
      res.render("error/500", { navPage: "" });
    }
  },
};

//on exporte le module
module.exports = controller;
