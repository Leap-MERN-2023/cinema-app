import { Router } from "express";
import { getTime, addShowtime, updateShowtime } from "../controller/showtime";
import { authenticate } from "../middleware/auth";

const router = Router();

router
  .route("/")
  .post(authenticate, addShowtime)
  .get(getTime)
  .put(authenticate, updateShowtime);

export default router;
