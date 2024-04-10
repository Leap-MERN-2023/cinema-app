import { NextFunction, Request, RequestHandler, Response } from "express";
import Cinema from "../model/cinema";

export const getCinemas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cinemas = await Cinema.find();
    res.status(201).json({ message: "Бүх кино олдлоо", cinemas });
  } catch (error) {
    console.log(error);
  }
};

export const createCinemas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCinema = req.body;
    const cinema = await Cinema.create(newCinema);
    res.status(201).json({ message: "шинэ кино театр үүслээ.", cinema });
  } catch (error) {
    res.status(400).json({ message: "Create cinema error" + error });
  }
};

export const deleteCinemas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("uneee-------------->", req.body.branchName.cinema);
    const cinema = await Cinema.findOne({
      _id: req.body.branchName.cinema._id,
    });
    console.log("------------------->", cinema);
    const updatedBranch = cinema?.branches.filter((branch: any) => {
      return branch._id.toString() !== req.body.branchName.branch._id;
    });
    const result = await Cinema.updateOne(
      { _id: req.body.branchName.cinema._id },
      {
        $set: {
          branches: updatedBranch,
        },
      }
    );
    const cinemas = await Cinema.find();
    console.log(cinemas);
    res.status(201).json({ message: " кино театр устлаа.", cinemas });
  } catch (error) {
    res.status(400).json({ message: "Delete cinema error" + error });
  }
};

export const putCinema: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const filteredData = Object.entries(updateCinema).reduce(
    //   (acc, [key, value]) => {
    //     if (value !== "") {
    //       acc[key] = value;
    //     }
    //     return acc;
    //   },
    //   {}
    // );

    // console.log(filteredData);

    const updatedCinema = await Cinema.findOneAndReplace(
      { _id: req.params.cinemaId },
      {
        cinemaName: req.body.cinema,
        branches: [
          {
            name: req.body.branchName,
            location: req.body.location,
            image: req.body.image,
          },
        ],
      }
    );
    // console.log("cinemaId", cinemaId);
    console.log("uurchilsun data", updatedCinema);

    res
      .status(201)
      .json({ message: "Cinema updated successfully", cinema: updatedCinema });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
