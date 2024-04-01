import { Request, Response, NextFunction } from "express";
import Ticket from "../model/ticket";
import Customer from "../model/customer";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";

export const getTickets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tickets = await Ticket.find();
    res.status(201).json({ message: "Бүх тасалбар олдлоо", tickets });
  } catch (error) {
    console.log(error);
  }
};

export const createTicket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await Customer.findOne(req.user._id);
    if (!user) {
      throw new MyError("Newtrene uu", 400);
    }
    const ticket = await Ticket.create({
      movieId: req.body.movieId,
      cinemaId: req.body.cinemaId,
      branch: req.body.branch,
      adultCount: req.body.adultCount,
      kidsCount: req.body.kidsCount,
      seatNumbers: req.body.seatNumbers,
      startTime: {
        date: {
          month: req.body.month,
          day: req.body.day,
        },
        time: req.body.time,
      },
    });
    res.status(201).json({ message: "шинэ кино тасалбар үүслээ.", ticket });
  } catch (error) {
    res.status(400).json({ message: "Create ticket error - " + error });
  }
};
