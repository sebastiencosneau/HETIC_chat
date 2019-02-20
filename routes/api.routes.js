/*
Imports
*/
    const express = require('express');
    const apiRouter = express.Router();
    const fetch = require('node-fetch');
//

/*
Définition
*/

    apiRouter.get( '/', (req, res) => {
        res.json({ msg: 'Hello API'});
    })

    apiRouter.post('/register', (req, res) => {
        // Vérifier les données de la requête
        if(
            req.body.email != undefined && req.body.email.length > 4 &&
            req.body.password != undefined && req.body.password.length > 4 &&
            req.body.pseudo != undefined && req.body.pseudo.length > 1

        ){
            // Configuration des données
            const userData = JSON.stringify(req.body);

            // Enregistrer les données dans la BDD
            fetch('http://localhost:3000/users', {
                method: 'POST',
                body: userData,
                headers: {'Content-Type': 'application/json'}
            })
            .then( newUser => res.json({msg: 'User registrated', data: newUser}))
            .catch( error => res.json({msg: 'User not registrated', data: error }));

        }
        else{
            res.json({msg: 'Bad fields provided'});
        }
    })

    apiRouter.post('/login', (req, res) => {
        if(
            req.body.password != undefined && req.body.password.length > 4 &&
            req.body.pseudo != undefined && req.body.pseudo.length > 1
        ){
            // Configuration des données
            const userData = JSON.stringify(req.body);

            // Enregistrer les données dans la BDD
            fetch(`http://localhost:3000/users?pseudo=${pseudo.value}&password=${password.value}`, { // a corriger
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })
            .then( rawData => {
                return rawData.json();
            })
            .then( jsonData => {

                if(jsonData.length > 0) {
                    res.json({msg: 'User connected', data: jsonData})
                }
                else {
                    res.json({msg: 'User not connected', data: null})
                }
            })
            .catch( error => res.json({msg: 'Connection error', data: error }));

        }
        else{
            res.json({msg: 'You are not register !'});
        }
    })
//

/*
Export
*/
    module.exports = apiRouter;
//