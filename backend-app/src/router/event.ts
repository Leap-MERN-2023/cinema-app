import { Router } from "express";
import { createEvent, getEvents } from "../controller/event";
import { upload } from "../utils/multer";

const router = Router();

router.route("/").post(upload.single("image"), createEvent).get(getEvents);

export default router;
