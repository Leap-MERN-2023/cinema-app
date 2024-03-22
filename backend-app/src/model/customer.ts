import { Schema, model } from "mongoose";

const customerSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  //   orders: [
  //     {
  //       type: Schema.ObjectId,
  //       ref: "Ticket",
  //       require: true,
  //     },
  //   ],
});

const Customer = model("Customer", customerSchema);

export default Customer;
