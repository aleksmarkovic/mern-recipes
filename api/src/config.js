import dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT,
    DB: {
        USERNAME: process.env.DB_USERNAME,
        PASSWORD: process.env.DB_PASSWORD,
    },
    ATLAS_URI: process.env.ATLAS_URI,
};
