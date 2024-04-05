import { NextFunction, Request, Response } from "express";
import Customer from "../model/customer";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import MyError from "../utils/myError";
import "dotenv/config";
import generateToken from "../utils/generateToken";

export const getCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allCustomers = await Customer.find();
    res.status(201).json({ message: "Бүх user олдлоо", allCustomers });
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
      .json({ message: "шинэ хэрэглэгч үүслээ.", user, token: verifyToken });
  } catch (error) {
    res
      .status(400)
      .json({ message: "шинэ хэрэглэгч бүртгэхэд алдаа гарлаа" + error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { userEmail, userPassword } = req.body;

  try {
    const existUser = await Customer.findOne({ email: userEmail })
      .select("+password")
      .populate("tickets")
      .lean();

    if (!existUser)
      return res.status(400).json({ message: `${userEmail} is not exist` });

    const isValid = await bcrypt.compare(
      userPassword,
      existUser.password as string
    );

    if (!isValid)
      return res
        .status(400)
        .json({ message: `Email or password is incorrect` });

    const token = generateToken(existUser._id.toString());

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      })
      .json({
        message: "success",
        user: existUser,
        token,
      });
  } catch (error: any) {
    res.status(500).json({ message: `${error.message}` });
  }
};
