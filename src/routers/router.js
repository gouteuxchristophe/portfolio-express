// On utilise express
const express = require('express');

// Import des controller
const controller = require('../controllers/controller');

// Utilisation du router d'express
const router = express.Router();

// Route =>

router.get('/', controller.pageHome);

// on exporte le module
module.exports = router;