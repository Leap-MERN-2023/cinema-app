import { NextFunction, Request, Response } from "express";
import Movie from "../model/movie";
import Seat from "../model/seat";
import Showtime from "../model/showtime";

export const getTime = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const times = await Showtime.find();
    res.status(201).json({ message: "Бүх kino олдлоо", times });
  } catch (error) {
    console.log(error);
  }
};

export const createTimes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newTimes = req.body;
    const times = await Showtime.create(newTimes);
    res.status(201).json({ message: "new shiwtime created", times });
  } catch (error) {
    res.status(400).json({ message: "there is an error" + error });
  }
};
