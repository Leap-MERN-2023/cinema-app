import { Schema, model } from "mongoose";

const showtimeSchema = new Schema({
  movie: {
    type: Schema.ObjectId,
    ref: "Movie",
    require: true,
  },
  startTime: {
    date: { type: String, require: true },
    time: { type: String, require: true },
  },
  endTime: Date,
});

const Showtime = model("Showtime", showtimeSchema);

export default Showtime;
