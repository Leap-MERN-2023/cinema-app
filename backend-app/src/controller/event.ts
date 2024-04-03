import { NextFunction, Request, Response } from "express";
import Event from "../model/event";

export const getEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const events = await Event.find();
    res.status(200).json({ message: "Бүх event олдлоо", events });
  } catch (error) {
    console.log(error);
  }
};

export const createEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newEvent = req.body;
    const event = await Event.create(newEvent);
    res.status(201).json({ message: "new event creted", event });
  } catch (error) {
    res.status(400).json({ message: "there is an error" + error });
  }
};
