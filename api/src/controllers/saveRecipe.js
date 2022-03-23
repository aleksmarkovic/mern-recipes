import { ObjectId } from 'mongodb';

import dbo from '../db/connection.js';

export default (req, res) => {
    let db_connect = dbo.getDb();

    db_connect.collection('recipes').insertOne(req.body, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
};
