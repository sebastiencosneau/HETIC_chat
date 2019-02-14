/*
Imports
*/
    const express = require('express');
    const frontRouter = express.Router();

    //const {readData} = require('../services/mysql.serv');
//

/*
Définition
*/
    frontRouter.get('/', (req, res) => {
        res.render('index');
    });

    frontRouter.get('/register', (req, res) => {
        res.render('register');
    });

    frontRouter.get('/login', (req, res) => {
        res.render('login');
    });

    frontRouter.get('/chat', (req, res) => {
        res.render('chat');
    });
//

/*
Export
*/
    module.exports = frontRouter;
//