import { Schema, model } from "mongoose";

const screenSchema = new Schema({
  movies: [
    {
      type: Schema.ObjectId,
      ref: "Movie",
      require: true,
    },
  ],
  timeTable: [
    {
      type: Schema.ObjectId,
      ref: "Showtime",
      require: true,
    },
  ],
  capacity: {
    type: Number,
    require: true,
    default: 144,
  },
  seats: [
    {
      type: Schema.ObjectId,
      ref: "Seat",
      require: true,
    },
  ],
});

const Screen = model("Screen", screenSchema);

export default Screen;
