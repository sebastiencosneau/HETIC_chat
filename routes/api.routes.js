/*
Imports
*/
    const express = require('express');
    const apiRouter = express.Router();
    const fetch = require('node-fetch');
//

/*
Couch DB
*/
const NodeCouchDb = require('node-couchdb');
    
// node-couchdb instance with default options
const couch = new NodeCouchDb();

// node-couchdb instance talking to external service
const couchExternal = new NodeCouchDb({
    host: 'macDWS.local',
    protocol: 'http',
    port: 5984,
    auth: {
        user: 'admin',
        pass: 'root'
    }
});

console.log(couchExternal);

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

            couch.insert("hetic-user", {
                email: req.body.email,
                password: req.body.password,
                pseudo: req.body.pseudo,

            }).then(({data, headers, status}) => {
                console.log(data, headers, status)
                return res.json(data)
            }, err => {
                return res.json(err)
            });
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
            // TODO: add data to couchDB
            return res.json(req.body);
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