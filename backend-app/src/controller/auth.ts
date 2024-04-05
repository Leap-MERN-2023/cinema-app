import { Response } from "express";
import Customer from "../model/customer";
import generateToken from "../utils/generateToken";

export const login = async (req: any, res: Response) => {
  console.log("GOSUCC", req.user);
  if (req.user) {
    const userExists = await Customer.findOne({
      email: req.user.email,
    }).lean();
    const token = generateToken(userExists?._id.toString() ?? "");
    return res.status(200).json({
      user: req.user,
      message: "Succesfully login",
      token,
    });
  } else {
    res.status(403).json({
      message: "Not Authorized",
    });
  }
};

export const loginSuccess = (req: any, res: Response) => {
  res.redirect(
    `http://localhost:3000/login/success?login=success&id=${req.user._id}`
  );
};
