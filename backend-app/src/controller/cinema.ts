import { NextFunction, Request, Response } from "express";
import Cinema from "../model/cinema";

export const getCinemas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cinemas = await Cinema.find();
    res.status(201).json({ message: "Бүх кино олдлоо", cinemas });
  } catch (error) {
    console.log(error);
  }
};

export const createCinemas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCinema = req.body;
    const cinema = await Cinema.create(newCinema);
    res.status(201).json({ message: "шинэ кино театр үүслээ.", cinema });
  } catch (error) {
    res.status(400).json({ message: "Create cinema error" + error });
  }
};
