import { Schema, model } from "mongoose";

const showtimeSchema = new Schema({
  movie: {
    type: Schema.ObjectId,
    ref: "Movie",
    require: true,
  },

  screen: {
    type: Schema.ObjectId,
    ref: "Screen",
    require: true,
  },

  startTime: Date,
  endTime: Date,
});

const Showtime = model("Showtime", showtimeSchema);

export default Showtime;
