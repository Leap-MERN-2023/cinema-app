import { Router } from "express";
import { createComingsoon, getComingsoon } from "../controller/comingsoon";

const router = Router();

router.route("/").post(createComingsoon).get(getComingsoon);

export default router;
