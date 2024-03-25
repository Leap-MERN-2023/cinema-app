import { Request, Response, NextFunction } from "express";
import Ticket from "../model/ticket";

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
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newTicket = req.body;
    const cinema = await Ticket.create(newTicket);
    res.status(201).json({ message: "шинэ кино тасалбар үүслээ.", newTicket });
  } catch (error) {
    res.status(400).json({ message: "Create ticket error - " + error });
  }
};
