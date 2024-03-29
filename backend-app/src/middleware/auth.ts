import { Request, Response, NextFunction } from "express";
import MyError from "../utils/myError";
import jwt from "jsonwebtoken";
import { IReq } from "../utils/interface";
import Customer from "../model/customer";

export const authenticate = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization) {
      throw new MyError(
        "Token байхгүй байна. Та заавал токен илгээх ёстой.",
        400
      );
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new MyError("Энэ үйлдлийг хийхийн тулд нэвтэрх ёстой", 400);
    }
    const { id } = jwt.verify(token!, process.env.JWT_PRIVATE_KEY!) as {
      id: string;
    };
    const findCustomer = await Customer.findById(id);
    req.user = findCustomer;
    next();
  } catch (error) {
    next(error);
  }
};
