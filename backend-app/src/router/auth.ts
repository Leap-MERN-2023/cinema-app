import { Response, Router } from "express";
import { login, signup } from "../controller/customer";
import { authenticate, isAuth } from "../middleware/auth";
import passport from "passport";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/google").get((req, res, next) => {
  console.log("GOOGLE oauth");
  next();
}, passport.authenticate("google", { scope: ["profile", "email"] }));
router.route("/google/callback").get(
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
    successRedirect: "/auth/google/success",
  })
);

router.route("/google/success").get((req: any, res: Response) => {
  console.log("", req.user);
  res.redirect(`http://localhost:3000/?login=success&id`);
});

export default router;
