import { MongoClient } from 'mongodb';

import config from '../config.js';

const Db = `mongodb+srv://${config.DB.USERNAME}:${encodeURIComponent(
    config.DB.PASSWORD
)}@recipecluster.aeziq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let _db = null;

export default {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // Verify we got a good "db" object
            if (db) {
                _db = db.db('recipes');
                console.log('Successfully connected to MongoDB.');
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};
