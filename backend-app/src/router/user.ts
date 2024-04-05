import { Router } from "express";
import { loginUser, signup } from "../controller/customer";

const router = Router();

router.route("/login").post(loginUser);
router.route("/signup").post(signup);

export default router;
