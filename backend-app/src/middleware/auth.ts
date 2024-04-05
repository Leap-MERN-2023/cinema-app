import { Request, Response, NextFunction } from "express";
import Customer from "../model/customer";
import verifyToken from "../utils/verifyToken";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("R", req.headers.authorization);
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: "Энэ үйлдлийг хийхийн тулд нэвтэрх ёстой" });
  }

  const token = req.headers.authorization.split(" ")[1];
  console.log("Token", token);

  if (!token) {
    console.log("Token-null", token);
    res
      .status(401)
      .json({ message: "Энэ үйлдлийг хийхийн тулд нэвтэрх ёстой" });
  } else {
    console.log("Token-Yes", token);
    const { userId } = verifyToken(token) as { userId: string };
    const findUser = await Customer.findById(userId).lean();
    req.user = findUser!;
    next();
  }
};

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return res.status(401).json({ message: "failed" });
  }
  res.status(200).json({ message: "success", user: req.user });
  next();
};
