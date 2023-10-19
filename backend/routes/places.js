import { Router } from "express";
import { allPlaces, placesById, updateById, deleteById, createPlace } from "../controllers/place.controllers.js";

export const placeRouter = Router();

placeRouter.get("/", allPlaces);

placeRouter.get("/:_id", placesById);

placeRouter.put("/:_id", updateById);

placeRouter.delete("/:_id", deleteById);

placeRouter.post("/", createPlace);