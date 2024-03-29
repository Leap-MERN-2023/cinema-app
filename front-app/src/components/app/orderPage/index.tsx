"use client";

import React, { useContext, useEffect, useState } from "react";
import { CinemaCard } from "./cinema";
import { OrderIndex } from "./orderParts";
import { Checkout } from "./checkout";
import { PaymentQr } from "./paymentQr";
import { CinemaContext } from "@/components";

type Props = {};

export const OrderPage = (props: Props) => {
  const [step, setStep] = useState(1);
  const { cinemas } = useContext(CinemaContext);

  const changeStep = () => {
    setStep((step) => step + 1);
  };

  const StepSwitch = () => {
    switch (step) {
      case 1:
        return (
          <ul className=" dark:text-white flex justify-center mt-10  lg:w-1/5">
            <div className="flex items-center  ">
              <li className="bg-red-500 text-white rounded-md p-2 mx-2">
                CinemaCard
              </li>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <div className="flex items-center">
              <li className=" text-white rounded-md p-2">orderIndex</li>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <div className="flex items-center">
              <li className=" text-white rounded-md p-2">Checkout</li>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <li className=" text-white rounded-md p-2">Payment</li>
          </ul>
        );
      case 2:
        return (
          <ul className=" dark:text-white flex justify-center  lg:w-1/5">
            <div className="flex items-center">
              <li className="bg-red-500 text-white rounded-md p-2 mx-2">
                CinemaCard
              </li>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <div className="flex items-center ">
              <li className="bg-red-500 text-white rounded-md p-2 mx-2">
                orderIndex
              </li>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <div className="flex items-center">
              <li className=" text-white rounded-md p-2">Checkout</li>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <li className=" text-white rounded-md p-2">Payment</li>
          </ul>
        );

      case 3:
        return (
          <ul className=" dark:text-white flex justify-center  lg:w-1/5">
            <div className="flex items-center ">
              <li className="bg-red-500 text-white rounded-md p-2 mx-2">
                CinemaCard
              </li>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <div className="flex items-center mx-2">
              <li className="bg-red-500 text-white rounded-md p-2 mx-2">
                orderIndex
              </li>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <div className="flex items-center">
              <li className=" bg-red-500 text-white rounded-md p-2 mx-2">
                Checkout
              </li>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <li className=" text-white rounded-md p-2">Payment</li>
          </ul>
        );
      case 4:
        return (
          <ul className=" dark:text-white flex justify-center  lg:w-1/5">
            <div className="flex items-center  ">
              <li className="bg-red-500 text-white rounded-md p-2 mx-2">
                CinemaCard
              </li>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <div className="flex items-center">
              <li className="bg-red-500 text-white rounded-md p-2 mx-2">
                orderIndex
              </li>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <div className="flex items-center">
              <li className=" bg-red-500 text-white rounded-md p-2 mx-2">
                Checkout
              </li>
              <div className="w-16 h-[1px] bg-white"></div>
            </div>
            <li className="bg-red-500 text-white rounded-md p-2 mx-2">
              Payment
            </li>
          </ul>
        );
    }
  };

  return (
    <div className=" flex flex-col h-full bg-slate-800 pt-36 items-center justify-center">
      {StepSwitch()}
      <div>
        {step === 1 && <CinemaCard changeStep={changeStep} cinemas={cinemas} />}
        {step === 2 && <OrderIndex changeStep={changeStep} />}
        {step === 3 && <Checkout changeStep={changeStep} />}
        {step === 4 && <PaymentQr />}
      </div>
    </div>
  );
};
