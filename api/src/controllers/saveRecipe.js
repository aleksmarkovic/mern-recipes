import { ObjectId } from 'mongodb';

import dbo from '../db/connection.js';

export default (req, res) => {
    let db_connect = dbo.getDb();
    let myobj = {
        name: 'name',
        ingredients: ['ingredient1', 'ingredient2'],
        description: 'description',
    };
    db_connect.collection('recipes').insertOne(myobj, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
};
