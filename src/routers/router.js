const express = require('express');

/* Import du controller */
const controller = require('../controllers/controller');


const router = express.Router();

/* Route => */
router.get('/', controller.pageHome);
router.get('/skills', controller.pageSkills);
router.get('/projects', controller.pageProjects);
router.get('/contactMe', controller.pageContact);
router.post('/sendForm', controller.sendForm)


/* Export du module vers index.js */
module.exports = router;