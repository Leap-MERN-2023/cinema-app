import { Router } from "express";
import { getTime, updateShowtime } from "../controller/showtime";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(authenticate, updateShowtime).get(getTime);

export default router;
