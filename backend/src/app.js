import express from 'express';
import database from '../database/database.js';
import userRouter from "../routes/user.router.js"
import passport from 'passport';
import initializePassport from "../controllers/passport.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

initializePassport();
app.use(passport.initialize());

app.use("/api/users", userRouter)

const httpServer = app.listen( process.env.PORT , () => {
    console.log("Listening on port 8080");
  });


database.connect()
