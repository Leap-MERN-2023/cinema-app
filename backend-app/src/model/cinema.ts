import { Schema, model } from "mongoose";

const cinemaSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  icon: {
    type: String,
    require: true,
  },
  location: {
    address: {
      street: String,
      city: {
        type: String,
        default: "Ulaanbaatar",
      },
      zipCode: {
        type: Number,
        default: 14211,
        length: 5,
      },
    },
  },
  opening: {
    type: String,
  },
  closing: {
    type: String,
  },
  image: {
    type: String,
    require: true,
  },
});

const Cinema = model("Cinema", cinemaSchema);

export default Cinema;
