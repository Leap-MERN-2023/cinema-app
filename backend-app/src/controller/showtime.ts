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
    }
    const ticket = await Ticket.findOne({ _id: req.body.ticket }).populate(
      "_id"
    );
    const length = ticket?.seatNumbers.length as number;

    for (let i = 0; i < length; i++) {
      await Showtime.updateOne(
        {
          _id: req.body.showtime._id,
        },
        {
          $set: {
            [`seats.${ticket?.seatNumbers[i].split("-").map(Number)[0] - 1}.${
              ticket?.seatNumbers[i].split("-").map(Number)[1] - 1
            }.status`]: "unavailable",
          },
        }
      );
    }
    res.status(200).json({
      message: "Amjilttai uzlegiin huvaari uurchilluu",
      ticket,
    });
  } catch (error) {
    console.log("uzlegiin huvaari nemeh ued aldaa garav", error);
  }
};
