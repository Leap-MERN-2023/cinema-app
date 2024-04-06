import { NextFunction, Request, Response } from "express";
import Showtime from "../model/showtime";
import Ticket from "../model/ticket";

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

export const addShowtime = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const times = await Showtime.create(req.body);
    res
      .status(200)
      .json({ message: "Amjilttai uzlegiin huvaari nemlee", time: times[-1] });
  } catch (error) {
    console.log("uzlegiin huvaari nemeh ued aldaa garav", error);
  }
};

export const updateShowtime = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("hi ---->", req.body.ticket);
    const ticket = await Ticket.findOne(req.body.ticket);
    console.log("ticket irev", ticket);
  } catch (error) {
    res.status(400).json({ message: "" });
  }
};
