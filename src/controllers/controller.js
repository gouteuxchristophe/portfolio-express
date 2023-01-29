// Import du dataMapper (SQL)
const projects = require('../../data/projects')
console.log(projects[0].languages);

// Objet du controller
const controller = {
    pageHome: (req, res) => {
        res.render('presentation');
    },
    pageSkills: (req, res) => {
        res.render('skills');
    },
    pageProjects: (req, res) => {
        res.render('projects', {projects});
    }
};


//on exporte le module
module.exports = controller