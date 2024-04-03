import { Router } from "express";
import { createEvent, getEvents } from "../controller/event";

const router = Router();

router.route("/").post(createEvent).get(getEvents);

export default router;
