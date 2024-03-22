import { Schema, model } from "mongoose";

const ticketSchema = new Schema({
  ticketType: {
    require: true,
    type: String,
    enum: ["Adult", "Child"],
  },
  screen: {
    type: Schema.ObjectId,
    require: true,
    ref: "Screen",
  },

  seat: {
    type: Schema.ObjectId,
    require: true,
    ref: "Seat",
  },

  customer: {
    type: Schema.ObjectId,
    ref: "Customer",
    require: true,
  },

  startTime: Date,
  endTime: Date,
});

const Ticket = model("Ticket", ticketSchema);

export default Ticket;
