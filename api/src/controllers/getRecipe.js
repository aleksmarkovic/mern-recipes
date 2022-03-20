import { ObjectId } from 'mongodb';

import dbo from '../db/connection.js';

export default (req, res) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection('recipes').findOne(myquery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};
