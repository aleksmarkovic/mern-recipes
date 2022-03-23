import dbo from '../db/connection.js';

export default (req, res) => {
    let db_connect = dbo.getDb();
    const result = db_connect
        .collection('recipes')
        .find({})
        .toArray((err, result) => {
            if (err) throw err;
            res.json(result);
        });
};
