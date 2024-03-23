import { Router } from "express";
import { createSeats } from "../controller/seat";

const router = Router();

router.route("/").post(createSeats);

export default router;
