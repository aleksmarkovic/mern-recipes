import { ObjectId } from 'mongodb';

import dbo from '../db/connection.js';

export default (req, res) => {
    let db_connect = dbo.getDb();
    let query = { _id: ObjectId(req.params.id) };
    let newValues = {
        $set: req.body,
    };

    db_connect
        .collection('recipes')
        .updateOne(query, newValues, (err, data) => {
            if (err) throw err;
            console.log('1 document updated');
            res.json(data);
        });
};
