// On utilise express
const express = require('express');

// Import des controller
const controller = require('../controllers/controller');

// Utilisation du router d'express
const router = express.Router();

// Route =>

router.get('/', controller.recoveryInfo, controller.pageHome);
router.get('/about', controller.recoveryInfo, controller.pageHome);
router.get('/skills', controller.recoveryInfo, controller.pageSkills);
router.get('/projects', controller.recoveryInfo, controller.pageProjects);
router.get('/language/:lang', controller.switchLanguage);


// on exporte le module
module.exports = router;