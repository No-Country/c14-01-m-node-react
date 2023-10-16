import { Router } from "express";
import passport from "passport";

import { registerUser } from "../controllers/userControllers.js";

const router = Router();

router.post("/",passport.authenticate ("register", {session: false}), registerUser); 

export default router;