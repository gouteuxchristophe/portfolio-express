// On utilise express
const express = require('express');

// Import des controller
const controller = require('../controllers/controller');

// Utilisation du router d'express
const router = express.Router();

// Route =>

router.get('/', controller.pageHome);
router.get('/about', controller.pageHome);
router.get('/skills', controller.pageSkills);
router.get('/projects', controller.pageProjects);
router.get('/language/:lang', controller.switchLanguage);


// on exporte le module
module.exports = router;