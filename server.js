/*
Imports
*/

    //require('dotenv').config();

    const express = require('express')
    const path = require('path');
    const ejs = require('ejs');
    const bodyparser = require('body-parser');    
    const mongoConnect = require('./services/mongo.serv')

//

/*
Configuration
*/
    const server = express();
    const port = 9876; //process.env.PORT;
    server.set( 'views', __dirname + '/www' );
//

/*
Démarrer le serveur
*/
    server.listen( port, () => console.log('Le serveur est lancé sur le port ' + port));
//