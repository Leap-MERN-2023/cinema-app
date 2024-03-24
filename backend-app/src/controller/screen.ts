import { NextFunction, Request, Response } from "express";
import Screen from "../model/screen";

export const getScreen = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const screen = await Screen.find();
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
    const screen = await Screen.create(newScreen);
    res.status(201).json({ message: "new screen creted", screen });
  } catch (error) {
    res.status(400).json({ message: "there is an error" + error });
  }
};
