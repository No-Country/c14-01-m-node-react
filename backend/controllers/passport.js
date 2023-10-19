import User from "../mongo/users.mongo.js";
import cartModel from "../models/cartModel.js";
import userModel from "../models/userModel.js";

import passport from "passport";
import local from "passport-local";
import jwt from "passport-jwt";
import cookieParser from "cookie-parser";
import { createHash, isValidPassword } from "../utils/utils.js";

import config from "../utils/config.js";
const {JWT_SECRET, COOKIE_NAME} = config;

const LocalStrategy = local.Strategy;
const JwtStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies){
        token = req.cookies[COOKIE_NAME]
    }
    return token;
}

const jwtOptions = {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
} 

const initializePassport = () => {
    
    passport.use(
        "register",
        new LocalStrategy( {passReqToCallback : true, usernameField: "email"}, async (req,username, password, done) => {
            try {
                const {first_name, last_name,email, age} = req.body;
                let {role} = req.body;

                let user = await userModel.findOne({email:username});
                
                if (user) {
                    console.log("user already exists");
                    return done(null, false);
                }

                const cart = await cartModel.create({})
 
                const newUser = {
                    first_name,
                    last_name,
                    email,
                    age,
                    password: createHash(password),
                    role : "inquilino",
                    cart: cart._id, 
                }

                const result = await userModel.create(newUser);

                if(!result) console.log("user not created");

                return done(null, result);

            } catch (error) {
                throw new Error (error);
            }
        })
        );

        passport.use(
            "jwt",
            new JwtStrategy(jwtOptions, async(jwt_payload, done) => {
                try {
                    return done(null, jwt_payload)
                } catch (error) {
                    return done(error)
                }
            })
        );

        passport.serializeUser((user, done) => {
            done(null, user._id);
        }); 
    
        passport.deserializeUser(async (id, done) => {
            let user = await userModel.findById(id);
            done(null, user);
        }); 
}

export default initializePassport;