import { Router } from "express";
import passport from "passport";

import { registerUser, login, logout} from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post('/register', passport.authenticate('register', { session: false }), (req, res) => {
    res.json({ user: req.user, token: req.user.token }), registerUser
});

authRouter.post("/login",login); 

authRouter.get("/logout", logout);

export default authRouter;