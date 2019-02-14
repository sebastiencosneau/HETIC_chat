/*
Import
*/
    const mongoose = require('mongoose');
//

/*
Config
*/
    const mongoConnect = () => {
        return new Promise( (resolve, reject) => {
            //Connexion
            mongoose.connect(process.env.MONGO_URL, {
                userNewUrlParser: true
            })
            .then( db => resolve(db))
            .catch( err => reject(err));
        })
    }
//

/*
Export
*/
    module.exports = mongoConnect;
//