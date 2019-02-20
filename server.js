/*
Imports
*/

    //require('dotenv').config();

    const express = require('express')
    const path = require('path');
    const ejs = require('ejs');
    const bodyparser = require('body-parser');    
    //const mongoConnect = require('./services/mongo.serv')
    const frontRouter = require('./routes/front.routes')
    const apiRouter = require('./routes/api.routes');

//

/*
Configuration
*/
    const server = express();
    const port = 9876; //process.env.PORT;


    class ServerClass{

        init(){
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );
            server.set( 'view engine', 'ejs' );

            // Body Parser
            server.use(bodyparser.urlencoded({ extended: false}))

            server.use( '/', frontRouter );
            server.use('/api', apiRouter);


            //Lancer le serveur
            this.launch();
        }

        launch(){
            server.listen( port, () => {
                console.log('Le serveur est lancé sur le port ' + port);
            }); 
        }
    }

//

/*
Démarrer le serveur
*/
    new ServerClass().init();
//