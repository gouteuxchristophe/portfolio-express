// Import du dataMapper (SQL)


// Objet du controller
const controller = {
    pageHome: (req, res) => {
        res.render('presentation')
    }
};


//on exporte le module
module.exports = controller