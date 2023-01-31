// Import du dataMapper (SQL)
const projects = require("../../data/projects");
const dataMapper = require("../dataMapper");

// Objet du controller
const controller = {
  pageHome: (req, res) => {
    res.locals.navPage = "about";
    res.render("about");
  },
  pageSkills: (req, res) => {
    res.locals.navPage = "skills";
    res.render("skills");
  },
  pageProjects: async (req, res) => {
    try {
      const allProjects = await dataMapper.getAllProjects();
      console.log(allProjects);
      res.locals.navPage = "projects";
      res.render("projects", { projects });
    } catch (error) {
        res.status(500).send(error.stack);
    }
  },
};

//on exporte le module
module.exports = controller;
