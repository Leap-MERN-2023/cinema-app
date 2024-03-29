import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  orderNo: String,
  tickets: [],
  paidDate: { type: Date, default: null },
  paymentStatus: {
    type: String,
    enum: ["Unpaid", "Paid"],
    required: true,
    default: "Unpaid",
  },
  payment: {
    paymentAmount: Number,
    paymentMethod: {
      type: String,
      enum: ["Qpay", "Bank card"],
      required: true,
    },
  },
});

const Order = model("Order", orderSchema);

export default Order;
