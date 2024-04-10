import { Router } from "express";
import {
  createCinemas,
  getCinemas,
  deleteCinemas,
  putCinema,
} from "../controller/cinema";

const router = Router();

router.route("/").post(createCinemas).get(getCinemas);
router.route("/delete").post(deleteCinemas);
router.route("/:cinemaId").put(putCinema);

export default router;
