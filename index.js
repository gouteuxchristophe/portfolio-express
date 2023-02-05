// Récupération Express - EJS - ENV
const express = require('express');
const session = require('express-session');
const router = require('./src/routers/router');
require('dotenv').config();


// Déclaration express
const app = express();

// Set views EJS + path views
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

// Session
app.use(session({
  secret: "keyboard cat", // secret pour générer les tokens
  resave: true, // sauvegarde à la fin de la requête
  saveUninitialized: true, // sauvegarde de la session même vide
  cookie: { secure: false,
    maxAge: (1000*60*60)
  }
}))

// Port env ou 3000
const PORT = process.env.PORT || 3000;

// Déclaration static (css...) router et 404
app.use(express.static('public'));
app.use(router);
app.use('*', (req, res) => {
    res.statusCode = 404;
    res.render('errors/404', { navPage: ''})
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