// On utilise express
const express = require('express');

// Import des controller
const controller = require('../controllers/controller');

// Utilisation du router d'express
const router = express.Router();

// Route =>

router.get('/', controller.pageHome);
router.get('/presentation', controller.pageHome);
router.get('/skills', controller.pageSkills);
router.get('/projects', controller.pageProjects);

// on exporte le module
module.exports = router;