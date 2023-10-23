import dotenv from "dotenv";
dotenv.config();

const config = {

    PORT: process.env.PORT,
    DB_URL: process.env.MONGO_URL,

    JWT_SECRET: process.env.JWT_SECRET,
    COOKIE_NAME: process.env.COOKIE_NAME,

    EMAIL_SERVICE: process.env.EMAIL_SERVICE,
    EMAIL_PORT: process.env.EMAIL_PORT,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,

}

export default config;