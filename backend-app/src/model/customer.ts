import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const customerSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  tickets: [
    {
      type: Schema.ObjectId,
      ref: "Ticket",
    },
  ],
});

customerSchema.pre("save", async function async(next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password as string, 10);
  }
  next();
});

const Customer = model("Customer", customerSchema);

export default Customer;
