import { Router } from "express";
import { allUser, usersById, updateUser, deleteUser, createUser, usersByEmail } from "../controllers/user.controllers.js";

export const userRouter = Router();

userRouter.get("/", allUser);

userRouter.get("/:_id", usersById);

userRouter.get("/email/:email", usersByEmail);

userRouter.put('/:_id', updateUser)

userRouter.delete('/:_id', deleteUser)

userRouter.post("/", createUser);
