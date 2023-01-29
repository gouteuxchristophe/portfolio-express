// Import du dataMapper (SQL)
const projects = require('../../data/projects')
const express = require('express');


// Objet du controller
const controller = {
    pageHome: (req, res) => {
        res.locals.navPage = 'about';
        
        res.render('about');
    },
    pageSkills: (req, res) => {
        res.locals.navPage = 'skills';
        res.render('skills');
    },
    pageProjects: (req, res) => {
        res.locals.navPage = 'projects';
        res.render('projects', {projects});
    }
};


//on exporte le module
module.exports = controller