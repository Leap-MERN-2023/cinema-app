import { Schema, model } from "mongoose";

const screenSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  movies: [
    {
      type: Schema.ObjectId,
      ref: "Movie",
      require: true,
    },
  ],
  capacity: {
    type: Number,
    require: true,
    default: 144,
  },
  seats: [],
});

const Screen = model("Screen", screenSchema);

export default Screen;
