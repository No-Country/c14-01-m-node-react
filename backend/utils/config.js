import dotenv from "dotenv";
dotenv.config();

const config = {

    PORT: process.env.PORT,
    DB_URL: process.env.MONGO_URL,

    JWT_SECRET: process.env.JWT_SECRET,
    COOKIE_NAME: process.env.COOKIE_NAME,


}

export default config;