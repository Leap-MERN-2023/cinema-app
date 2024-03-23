import { Router } from "express";
import { createMovies, getMovies } from "../controller/movie";

const router = Router();

router.route("/").post(createMovies).get(getMovies);

export default router;
