import { Response, Router } from "express";
import { isAuth } from "../middleware/auth";

const router = Router();

router.route("/google/success").get((req: any, res: Response) => {
  console.log("", req.user);
  res.redirect(`http://localhost:3000/?login=success&id`);
});

router.route("/current_user").get(isAuth, (req, res) => {
  res.status(201).json({ user: req.user });
});

export default router;
