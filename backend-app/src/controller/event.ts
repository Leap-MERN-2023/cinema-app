import { NextFunction, Request, Response } from "express";
import Event from "../model/event";
import cloudinary from "../utils/cloudinary";
import Customer from "../model/customer";
import MyError from "../utils/myError";

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
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const finduser = Customer.findById(req.user?._id);
    if (!finduser) {
      throw new MyError("Нэмэх үйлдлийг хийхийн тулд нэвтрэх хэрэгтэй", 400);
    } else {
      const newEvent = { ...req.body };

      console.log("newEvent", newEvent);
      console.log("newEvent - image", req.file?.path);

      if (req.file) {
        const { secure_url } = await cloudinary.uploader.upload(req.file.path);
        newEvent.image = secure_url;
      }

      const event = await Event.create(newEvent);
      res.status(201).json({ message: "new event created", event });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteEvent = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const finduser = Customer.findById(req.user?._id);
    if (!finduser) {
      throw new MyError("Устгах үйлдлийг хийхийн тулд нэвтрэх хэрэгтэй", 400);
    } else {
      await Event.findByIdAndDelete(req.params.eventId);
      res.status(201).json({ message: "deleted event" });
    }
  } catch (error) {
    next(error);
  }
};
