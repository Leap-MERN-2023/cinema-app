import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  poster: {
    horizontal: {
      type: String,
      require: true,
    },
    lands: [
      {
        type: String,
      },
    ],
  },
  duration: Number,
  releaseDate: Date,
  director: {
    type: String,
    require: true,
  },
  synopsis: {
    type: String,
    maxlength: [500],
  },
  cinemas: [
    {
      type: Schema.ObjectId,
      ref: "Cinema",
      require: true,
    },
  ],
  movieType: {
    type: String,
    enum: ["2D", "3D", "IMAX", "LASER"],
    require: true,
  },
});

const Movie = model("Movie", movieSchema);

export default Movie;
