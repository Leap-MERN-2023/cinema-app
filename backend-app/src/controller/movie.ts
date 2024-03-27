import { NextFunction, Request, Response } from "express";
import Movie from "../model/movie";

export const getMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movies = await Movie.find().populate("cinemas");
    res.status(200).json({ message: "Бүх kino олдлоо", movies });
  } catch (error) {
    console.log(error);
  }
};

export const createMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newMovie = req.body;
    const movie = await Movie.create(newMovie);
    res.status(201).json({ message: "new movie creted", movie });
  } catch (error) {
    res.status(400).json({ message: "there is an error" + error });
  }
};
