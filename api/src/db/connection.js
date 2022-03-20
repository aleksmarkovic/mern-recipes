import { MongoClient } from 'mongodb';

import config from '../config.js';

console.log(process.env);
console.log('process.env');
const Db = config.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const _db = null;

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
