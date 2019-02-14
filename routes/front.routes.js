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
//

/*
Export
*/
    module.exports = frontRouter;
//