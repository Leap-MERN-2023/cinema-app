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
    res.status(201).json({ message: "Бүх цагууд олдлоо", times });
  } catch (error) {
    console.log(error);
  }
};

export const getTimes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const times = await Showtime.findOne({
      movie: req.body.movieId,
      cinema: req.body.cinemaId,
      branch: req.body.branch,
      screen: req.body.screen,
      startTime: req.body.startTime,
    });
    res.status(201).json({ message: "Цагийн хуваариуд ирлээ", times });
  } catch (error) {
    res.status(400).json({ message: "there is an error" + error });
  }
};
