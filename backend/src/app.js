import express from 'express';
import database from '../database/database.js';
import passport from 'passport';
import initializePassport from "../controllers/passport.js";
import cookieParser from 'cookie-parser';
import authRouter from '../routes/auth.router.js';
import { placeRouter } from '../routes/places.js';
import { userRouter } from '../routes/users.js';

const app = express();
app.disable('x-powered-by')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

initializePassport();
app.use(passport.initialize());


app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/places' , placeRouter)



const httpServer = app.listen( process.env.PORT , () => {
    console.log("Listening on port 8080");
  });

database.connect();
