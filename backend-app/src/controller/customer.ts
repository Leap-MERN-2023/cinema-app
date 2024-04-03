import { NextFunction, Request, Response } from "express";
import Customer from "../model/customer";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import MyError from "../utils/myError";
import "dotenv/config";

export const getCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allCustomers = await Customer.find();
    res.status(201).json({ message: "Бүх кино олдлоо", allCustomers });
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = req.body;
    const user = await Customer.create({ ...newUser });
    const verifyToken = jwt.sign(
      { email: user.email },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: process.env.JWT_EXPIRE_IN }
    );
    console.log("usershuuuuu=======", user, "tokenshuuuuu=======", verifyToken);
    res
      .status(201)
      .json({ message: "шинэ хэрэглэгч үүслээ.", user, verifyToken });
  } catch (error) {
    res
      .status(400)
      .json({ message: "шинэ хэрэглэгч бүртгэхэд алдаа гарлаа" + error });
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { customerEmail, customerPassword } = req.body;
    const customer = await Customer.findOne({ email: customerEmail })
      .select("+password")
      .populate("orders")
      .lean();

    if (!customer) {
      throw new MyError(`${customerEmail}-тэй Хэрэглэгч олдсонгүй.`, 400);
    }
    const isValid = await bcrypt.compare(
      customerPassword,
      customer.password as string
    );
    if (!isValid) {
      throw new MyError(`Имэйл эсвэл нууц үг буруу байна.`, 400);
    }
    const token = jwt.sign(
      { id: customer._id },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: process.env.JWT_EXPIRE_IN }
    );
    const { password, ...otherParams } = customer;
    res.status(201).json({
      message: "Хэрэглэгч амжилттай нэвтэрлээ",
      token,
      user: otherParams,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "hereglegch nevtrehed aldaa garlaa" + error });
  }
};
