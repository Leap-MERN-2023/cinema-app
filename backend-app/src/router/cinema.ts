import { Router } from "express";
import { createCinemas, getCinemas } from "../controller/cinema";

const router = Router();

router.route("/").post(createCinemas).get(getCinemas);

export default router;
