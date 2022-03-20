import { ObjectId } from 'mongodb';

import dbo from '../db/connection.js';

export default (req, res) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection('recipes').deleteOne(myquery, (err, data) => {
        if (err) throw err;
        console.log('1 document deleted');
        res.json(data);
        console.log(data);
    });
};
