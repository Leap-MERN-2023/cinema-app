import { NextFunction, Request, Response } from "express";
import Movie from "../model/movie";
import MyError from "../utils/myError";
import cloudinary from "../utils/cloudinary";
import Customer from "../model/customer";

export const getMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({ message: "Бүх kino олдлоо", movies });
  } catch (error) {
    console.log(error);
  }
};

export const createMovie = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const finduser = Customer.findById(req.user?._id);
    if (!finduser) {
      throw new MyError("Нэмэх үйлдлийг хийхийн тулд нэвтрэх хэрэгтэй", 400);
    } else {
      const newMovie = { ...req.body };

      console.log("newMovie", newMovie);
      console.log("newMovie - image", req.file?.path);

      if (req.file) {
        const { secure_url } = await cloudinary.uploader.upload(req.file.path);
        newMovie.image = secure_url;
      }

      const movie = await Movie.create(newMovie);
      res.status(201).json({ message: "new event created", movie });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteMovie = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const finduser = Customer.findById(req.user?._id);
    if (!finduser) {
      throw new MyError("Устгах үйлдлийг хийхийн тулд нэвтрэх хэрэгтэй", 400);
    } else {
      await Movie.findByIdAndDelete(req.params.movieId);
      res.status(201).json({ message: "movie deleted" });
    }
  } catch (error) {
    next(error);
  }
};
