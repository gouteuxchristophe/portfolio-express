/* Import du dataMapper (Requête SQL) et de nodemailer(SMTP mail)*/ 
const dataMapper = require("../dataMapper");
const nodemailer = require('nodemailer');


const controller = {
  pageHome: async (req, res) => {
    try {
      const about = await dataMapper.getAbout();
      res.render("about", { about });
    } catch (error) {
      res.status(500);
      res.render("error/500");
    }
  },
  pageSkills: async (req, res) => {
    try {
      const skills = await dataMapper.getSkills();
      res.render("skills", { skills});
    } catch (error) {
      res.status(500);
      res.render("errors/500");
    }
  },
  pageProjects: async (req, res) => {
    try {
      const projects = await dataMapper.getAllProjects();
      res.render("projects", { projects });
    } catch (error) {
      res.status(500);
      res.render("error/500");
    }
  },
  pageContact: (req, res) => {
    res.render('contact', { confirmationSend: "" })
  },
  sendForm: async (req, res) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
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
      res.render('contact', { confirmationSend: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.render('contact', { confirmationSend: 'Error sending message, please try again later.'});
    }
  }
};

/* Export du module vers le router*/
module.exports = controller;
