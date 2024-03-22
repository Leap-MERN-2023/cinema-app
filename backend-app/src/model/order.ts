import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  paymentStatus: {
    enum: ["Unpaid", "Paid"],
    require: true,
  },
  paymentMethod: {
    enum: ["Qpay", "Bank card"],
    require: true,
  },
});

const Order = model("Order", orderSchema);

export default Order;
