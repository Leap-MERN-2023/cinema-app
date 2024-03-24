import { Schema, model } from "mongoose";
import { type } from "os";

const seatSchema = new Schema({
  status: {
    type: String,
    require: true,
    enum: ["unavailable", "available"],
  },

  screen: {
    type: Schema.ObjectId,
    require: true,
    ref: "Screen",
  },

  isNull: Boolean,
});

const Seat = model("Seat", seatSchema);

export default Seat;
