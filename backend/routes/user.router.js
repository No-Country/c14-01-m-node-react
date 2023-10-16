import { Router } from "express";
import passport from "passport";

import { registerUser, login, logout} from "../controllers/userControllers.js";

const router = Router();

router.post("/register",passport.authenticate ("register", {session: false}), registerUser); 

router.post("/login",login); 

router.get("/logout", logout);

export default router;