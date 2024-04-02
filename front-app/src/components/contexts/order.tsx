"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/components/utils/axios";
import { Dispatch, SetStateAction } from "react";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { AuthContext } from ".";

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
  const { token } = useContext(AuthContext);

  const createOrder = async (form: any) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await myAxios.post(
        "/order",
        {
          paymentAmount: form.paymentAmount,
          paymentMethod: form.paymentMethod,
        },
        config
      );
      console.log("Order data", data);
    } catch (error) {}
  };
  const getSelectedMovieData = async () => {
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
