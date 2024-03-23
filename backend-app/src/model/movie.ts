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
    lands: {
      land1: {
        type: String,
        require: true,
      },

      land2: {
        type: String,
        require: true,
      },
    },
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
      //
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
