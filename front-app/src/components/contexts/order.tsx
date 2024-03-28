"use client";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/components/utils/axios";
import { Dispatch, SetStateAction } from "react";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

interface IOrderContext {
  setOrder: Dispatch<
    SetStateAction<{ paymentAmount: string; paymentMethod: string }>
  >;
  order: any;
  createOrder: (form: any) => Promise<void>;
}

export const OrderContext = createContext({} as IOrderContext);

export const OrderProvider = ({ children }: PropsWithChildren) => {
  const [order, setOrder] = useState({ paymentAmount: "", paymentMethod: "" });

  //   payment: {
  //     paymentAmount: req.body.paymentAmount,
  //     paymentMethod: req.body.paymentMethod,
  //   },

  const createOrder = async (form: any) => {
    const token = localStorage?.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(config);
    try {
      console.log(form, "asdsajkasdjklasdjlkasdjkljsadkljsadlk");
      const { data } = await myAxios.post(
        "/order",
        {
          paymentAmount: form.paymentAmount,
          paymentMethod: form.paymentMethod,
        },
        config
      );
      console.log(data);
    } catch (error) {}
  };
  const getOrder = async () => {
    try {
    } catch (error) {}
  };

  useEffect(() => {}, []);

  return (
    <OrderContext.Provider value={{ order, setOrder, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
