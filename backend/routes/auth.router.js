import { Router } from "express";
import passport from "passport";

import { registerUser, login, logout} from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post("/register",passport.authenticate ("register", {session: false}), registerUser); 

authRouter.post("/login",login); 

authRouter.get("/logout", logout);

export default authRouter;