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

export const updateShowtime = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.ticket === undefined) {
      const showtime = await Showtime.create(req.body);
      res
        .status(200)
        .json({ message: "Amjilttai uzlegiin huvaari nemlee", showtime });
    } else {
      const showtime = await Showtime.findOne({ _id: req.body.showtime._id });
      console.log("hi1", showtime);
      const ticket = await Ticket.findOne({ _id: req.body.ticket }).populate(
        "_id"
      );
      // if (ticket?.seatNumbers.length === 1) {
      //   showtime?.seats[Number(ticket?.seatNumbers[0].split("-")[0]) - 1][
      //     Number(ticket?.seatNumbers[0].split("-")[1]) - 1
      //   ]?.status;
      // }
      // ticket?.seatNumbers.map(
      //   (seatNumber: string) =>
      //     showtime?.seats[Number(seatNumber.split("-")[0]) - 1][
      //       Number(seatNumber.split("-")[1]) - 1
      //     ]?.status
      // );
      console.log("iiiiiiiiiiiiiiiiiiiiiiii", ticket);
      res.status(200).json({
        message: "Amjilttai uzlegiin huvaari uurchilluu",
        showtime,
        ticket,
      });
    }
  } catch (error) {
    console.log("uzlegiin huvaari nemeh ued aldaa garav", error);
  }
};
