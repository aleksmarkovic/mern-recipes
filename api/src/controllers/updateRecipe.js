import { ObjectId } from 'mongodb';

import dbo from '../db/connection.js';

export default (req, res) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        $set: {
            name: 'New name',
        },
    };
    db_connect
        .collection('recipes')
        .updateOne(myquery, newvalues, (err, data) => {
            if (err) throw err;
            console.log('1 document updated');
            res.json(data);
        });
};
