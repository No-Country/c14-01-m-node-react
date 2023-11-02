import { Router } from "express";

import { allReservations, createReservation,reservationByEmail, updateReservation, deleteReservations } from "../controllers/reservation.controllers.js";

const router = Router();

router.get("/", allReservations);

router.get("/:email", reservationByEmail);

router.post("/", createReservation);

router.put("/:id", updateReservation);

router.delete("/:id", deleteReservations);

export default router;