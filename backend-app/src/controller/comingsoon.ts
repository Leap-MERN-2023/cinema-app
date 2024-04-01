import { NextFunction, Request, Response } from "express";
import Movie from "../model/movie";
import Comingsoon from "../model/comingsoon";

export const getComingsoon = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movies = await Comingsoon.find();
    res.status(200).json({ message: "Бүх kino олдлоо", movies });
  } catch (error) {
    console.log(error);
  }
};

export const createComingsoon = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newMovie = req.body;
    const movie = await Comingsoon.create(newMovie);
    res.status(201).json({ message: "new movie creted", movie });
  } catch (error) {
    res.status(400).json({ message: "there is an error" + error });
  }
};
