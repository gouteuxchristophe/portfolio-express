// Récupération Express - EJS - ENV
const express = require('express');
const router = require('./src/routers/router');
require('dotenv').config();

// Déclaration express
const app = express();

// Set views EJS + path views
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

// Port env ou 3000
const PORT = process.env.PORT || 3000;

// Déclaration static (css...) router et 404
app.use(express.static('public'));
app.use(router);
app.use('*', (req, res) => {
    res.statusCode = 404;
    res.send('Page not found')
});

// Console log localhost / online
let message = "";
if (process.env.MODE === "prod") {
  message = "Le serveur est lancé sur http://monsupernomdedomaine.fr";
} else {
  message = "Le serveur est lancé sur localhost";
}

// Ecoute du serveur
app.listen(PORT, () => console.log(message));