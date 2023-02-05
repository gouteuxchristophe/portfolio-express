// Import du dataMapper (SQL)
const dataMapper = require("../dataMapper");
const nodemailer = require('nodemailer');

// Objet du controller
const controller = {
  recoveryInfo: (req, res, next) => {
    if (req.session.language === undefined || !req.session.language) {
      req.session.language = "french";
    }
    req.session.url = req.originalUrl;
    const valueLanguage = req.session.language;
    res.locals.valueLanguage = valueLanguage;
    next();
  },
  pageHome: async (req, res) => {
    try {
      const about = await dataMapper.getAbout();
      res.locals.navPage = "about"; // Permet la dynamisation du menu
      res.render("about", { about });
    } catch (error) {
      res.status(500);
      res.render("error/500", { navPage: "" });
    }
  },
  pageSkills: async (req, res) => {
    try {
      const skillsFront = await dataMapper.getSkills("front-end");
      const skillsBack = await dataMapper.getSkills("back-end");
      const skillsGest = await dataMapper.getSkills("gestion");
      res.locals.navPage = "skills"; // Permet la dynamisation du menu
      res.render("skills", { skillsFront, skillsBack, skillsGest });
    } catch (error) {
      res.status(500);
      res.render("errors/500", { navPage: "" });
    }
  },
  pageProjects: async (req, res) => {
    try {
      const projects = await dataMapper.getAllProjects();
      res.locals.navPage = "projects"; // Permet la dynamisation du menu
      res.render("projects", { projects });
    } catch (error) {
      res.status(500);
      res.render("error/500", { navPage: "" });
    }
  },
  switchLanguage: (req, res) => {
    req.session.language = req.params.lang;
    const valueLanguage = req.session.language;
    res.locals.valueLanguage = valueLanguage;
    res.redirect(`${req.session.url}`);
  },
  pageContact: (req, res) => {
    res.render('contact', { navPage: "", confirmationSend: "" })
  },
  sendForm: async (req, res) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'contact@christophegouteux.fr',
        pass: 'Mael&Lucas1210'
      },
      tls: {
        rejectUnauthorized: false
    },
    });
    const mailOptions = {
      from: toString(req.body.mail),
      to: 'contact@christophegouteux.fr',
      subject: req.body.object,
      text: `From: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
    };
    try {
      await transporter.sendMail(mailOptions);
      res.render('contact', { navPage: "", confirmationSend: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.render('contact', { navPage: "", confirmationSend: 'Error sending message, please try again later.'});
    }
  }
};

//on exporte le module
module.exports = controller;
