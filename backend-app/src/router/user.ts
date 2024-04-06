import { Router } from "express";
import {
  deleteCustomer,
  getCustomer,
  loginUser,
  signup,
} from "../controller/customer";

const router = Router();

router.route("/login").post(loginUser);
router.route("/signup").post(signup);
router.route("/allcustomer").get(getCustomer);
router.route("/deletecustomer").post(deleteCustomer);

export default router;
