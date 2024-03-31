import { Router } from "express";
import { getTimes, getTime } from "../controller/showtime";

const router = Router();

router.route("/").post(getTimes).get(getTime);

export default router;
