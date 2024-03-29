import { Router } from "express";
import { createScreen, getScreen, getScreenById } from "../controller/screen";

const router = Router();

router.route("/").post(createScreen).get(getScreen);
export default router;
