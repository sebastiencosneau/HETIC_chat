/*
Imports
*/
    const express = require('express');
    const apiRouter = express.Router();
//

/*
Définition
*/
    apiRouter.post('/register', (req, res) => {
        res.json('register');
    })

    apiRouter.post('/login', (req, res) => {
        res.json('login');
    })
//

/*
Export
*/
    module.exports = apiRouter;
//