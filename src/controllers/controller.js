// Import du dataMapper (SQL)


// Objet du controller
const controller = {
    pageHome: (req, res) => {
        res.render('presentation');
    },
    pageSkills: (req, res) => {
        res.render('skills');
    },
    pageProjects: (req, res) => {
        res.render('projects');
    }
};


//on exporte le module
module.exports = controller