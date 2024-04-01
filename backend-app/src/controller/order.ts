import { NextFunction, Response } from "express";
import { IReq } from "../utils/interface";
import Order from "../model/order";
import Ticket from "../model/ticket";
import Customer from "../model/customer";

export const createOrder = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderNo = () => {
      return Math.floor(Math.random() * 100000) + 1;
    };
    const newFormData = req.body;
    // const findTicket = await Ticket.find({ customer: req.user._id });
    const findCustomer = await Customer.findById(req.user._id);
    if (!findCustomer) {
      return res.status(400).json({ message: "customer is not found." });
    }
    const order = await Order.create({
      customer: findCustomer._id,
      orderNo: "#" + orderNo(),
      tickets: [],
      payment: {
        paymentAmount: req.body.paymentAmount,
        paymentMethod: req.body.paymentMethod,
      },
    });
    res.status(201).json({ message: "customer's order created successfully." });
  } catch (error) {
    next(error);
  }
};

export const getAllOrder = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const findOrder = await Order.find({ user: req.user._id });
    if (findOrder) {
      res.status(200).json({ findOrder });
    } else {
      res.status(404).json({ message: "Order not found for this user." });
    }
  } catch (error) {
    next(error);
  }
};
