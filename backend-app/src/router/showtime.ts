import { Router } from "express";
import { getTimes, getTime } from "../controller/showtime";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(authenticate, getTimes).get(getTime);

export default router;
