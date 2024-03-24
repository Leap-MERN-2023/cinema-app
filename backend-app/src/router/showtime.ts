import { Router } from "express";
import { createTimes, getTime } from "../controller/showtime";

const router = Router();

router.route("/").post(createTimes).get(getTime);

export default router;
