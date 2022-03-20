import express from 'express';
import cors from 'cors';

import config from './config.js';

import dbo from './db/connection.js';
import routes from './routes/recipes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// get driver connection

app.listen(config.PORT, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${config.PORT}`);
});
