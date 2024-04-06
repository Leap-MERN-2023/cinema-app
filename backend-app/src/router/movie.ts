import { Router } from "express";
import { createMovie, deleteMovie, getMovies } from "../controller/movie";
import { authenticate } from "../middleware/auth";
import { upload } from "../utils/multer";

const router = Router();

router
  .route("/")
  .post(authenticate, upload.single("image"), createMovie)
  .get(getMovies);
router.route("/:movieId").delete(authenticate, deleteMovie);

export default router;
