import { Router } from "express";

import { allReservations, createReservation,reservationById, updateReservation, deleteReservations } from "../controllers/reservation.controllers.js";

const router = Router();

router.get("/", allReservations);

router.get("/:id", reservationById);

router.post("/", createReservation);

router.put("/:id", updateReservation);

router.delete("/:id", deleteReservations);

export default router;