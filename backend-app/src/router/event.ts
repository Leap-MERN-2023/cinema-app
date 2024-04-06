import { Router } from "express";
import { createEvent, deleteEvent, getEvents } from "../controller/event";
import { upload } from "../utils/multer";
import { authenticate } from "../middleware/auth";

const router = Router();

router
  .route("/")
  .post(authenticate, upload.single("image"), createEvent)
  .get(getEvents);
router.route("/:eventId").delete(authenticate, deleteEvent);

export default router;
