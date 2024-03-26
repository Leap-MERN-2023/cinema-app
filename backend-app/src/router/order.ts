import { Router } from "express";
import { createOrder, getAllOrder } from "../controller/order";
import { authenticate } from "../middleware/auth";

const router = Router();

router
  .route("/")
  .post(authenticate, createOrder)
  .get(authenticate, getAllOrder);

export default router;
