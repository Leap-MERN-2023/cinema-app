import { NextFunction, Request, Response } from "express";
import Screen from "../model/screen";
import Seat from "../model/seat";

export const getScreen = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const screen = await Screen.find().populate("seats");
    res.status(201).json({ message: "Бүх screen олдлоо", screen });
  } catch (error) {
    console.log(error);
  }
};

export const createScreen = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newScreen = req.body;
    const s = await Seat.find();
    const screen = await Screen.create(newScreen);
    res.status(201).json({ message: "new screen created", screen });
  } catch (error) {
    res.status(400).json({ message: "there is an error" + error });
  }
};
