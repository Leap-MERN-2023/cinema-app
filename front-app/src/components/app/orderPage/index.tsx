"use client";

import React, { useContext, useEffect, useState } from "react";
import { CinemaCard } from "./cinema";
import { OrderIndex } from "./orderParts";
import { Checkout } from "./checkout";
import { PaymentQr } from "./paymentQr";
import { CinemaContext } from "@/components";
import { BiCameraMovie } from "react-icons/bi";
import { MdOutlineChair } from "react-icons/md";
import { LiaWalletSolid } from "react-icons/lia";
import { TfiTicket } from "react-icons/tfi";
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
          <ul className=" dark:text-white flex justify-center mt-5  ">
            <div className="flex items-center ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center ml-7 rounded-xl bg-red-500">
                  <BiCameraMovie className="w-12 h-10 text-white" />
                </button>
                <li className=" text-white pl-1">Кино сонголт</li>
              </div>
            </div>
            <div className="w-20 h-[1px] mt-8  bg-white"></div>
            <div className="flex items-center ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center ml-9 rounded-xl bg-white">
                  <MdOutlineChair className="w-12 h-10" />
                </button>
                <li className=" text-white w-32">Суудал сонголт</li>
              </div>
            </div>
            <div className="w-20 h-[1px] mt-8  bg-white"></div>
            <div className="flex items-center  ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center  rounded-xl ml-9 bg-white">
                  <LiaWalletSolid className="w-12 h-10 " />
                </button>
                <li className=" text-white w-32">Баталгаажуулах</li>
              </div>
            </div>
            <div className="w-20 h-[1px] mt-8  bg-white"></div>
            <div className="flex items-center ml-4 ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center ml-1 rounded-xl bg-white">
                  <TfiTicket className="w-12 h-10 " />
                </button>
                <li className=" text-white">QR код</li>
              </div>
            </div>
          </ul>
        );
      case 2:
        return (
          <ul className=" dark:text-white flex justify-center mt-5  ">
            <div className="flex items-center ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center ml-7 rounded-xl bg-red-500">
                  <BiCameraMovie className="w-12 h-10 text-white" />
                </button>
                <li className=" text-white rounded-md pl-1">Кино сонголт</li>
              </div>
            </div>
            <div className="w-20 h-[1px] mt-8  bg-red-500"></div>
            <div className="flex items-center ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center ml-9 rounded-xl bg-red-500">
                  <MdOutlineChair className="w-12 h-10 text-white" />
                </button>
                <li className=" text-white w-32">Суудал сонголт</li>
              </div>
            </div>
            <div className="w-20 h-[1px] mt-8  bg-white"></div>
            <div className="flex items-center  ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center  rounded-xl ml-9 bg-white">
                  <LiaWalletSolid className="w-12 h-10 " />
                </button>
                <li className=" text-white w-32">Баталгаажуулах</li>
              </div>
            </div>
            <div className="w-20 h-[1px] mt-8  bg-white"></div>
            <div className="flex items-center ml-4 ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center ml-1 rounded-xl bg-white">
                  <TfiTicket className="w-12 h-10 " />
                </button>
                <li className=" text-white w-32">QR код</li>
              </div>
            </div>
          </ul>
        );

      case 3:
        return (
          <ul className=" dark:text-white flex justify-center mt-5  ">
            <div className="flex items-center ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center ml-7 rounded-xl bg-red-500">
                  <BiCameraMovie className="w-12 h-10 text-white" />
                </button>
                <li className=" text-white rounded-md pl-1">Кино сонголт</li>
              </div>
            </div>
            <div className="w-20 h-[1px] mt-8  bg-red-500"></div>
            <div className="flex items-center ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center ml-9 rounded-xl bg-red-500">
                  <MdOutlineChair className="w-12 h-10 text-white" />
                </button>
                <li className=" text-white w-32">Суудал сонголт</li>
              </div>
            </div>
            <div className="w-20 h-[1px] mt-8  bg-red-500"></div>
            <div className="flex items-center  ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center  rounded-xl ml-9 bg-red-500">
                  <LiaWalletSolid className="w-12 h-10 text-white" />
                </button>
                <li className=" text-white w-32">Баталгаажуулах</li>
              </div>
            </div>
            <div className="w-20 h-[1px] mt-8  bg-white"></div>
            <div className="flex items-center ml-4 ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center ml-1 rounded-xl bg-white">
                  <TfiTicket className="w-12 h-10 " />
                </button>
                <li className=" text-white w-32">QR код</li>
              </div>
            </div>
          </ul>
        );
      case 4:
        return (
          <ul className=" dark:text-white flex justify-center mt-5  ">
            <div className="flex items-center ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center ml-7 rounded-xl bg-red-500">
                  <BiCameraMovie className="w-12 h-10 text-white" />
                </button>
                <li className=" text-white rounded-md pl-1">Кино сонголт</li>
              </div>
            </div>
            <div className="w-20 h-[1px] mt-8  bg-red-500"></div>
            <div className="flex items-center ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center ml-9 rounded-xl bg-red-500">
                  <MdOutlineChair className="w-12 h-10 text-white" />
                </button>
                <li className=" text-white w-32">Суудал сонголт</li>
              </div>
            </div>
            <div className="w-20 h-[1px] mt-8  bg-red-500"></div>
            <div className="flex items-center  ">
              <div className="flex-col  max-h-20 w-28">
                <button className="items-center  rounded-xl ml-9 bg-red-500">
                  <LiaWalletSolid className="w-12 h-10 text-white" />
                </button>
                <li className=" text-white w-32">Баталгаажуулах</li>
              </div>
            </div>
            <div className="w-20 h-[1px] mt-8  bg-red-500"></div>
            <div className="flex items-center ml-4 ">
              <div className="flex-col  max-h-20 w-28 ">
                <button className="items-center ml-1 rounded-xl bg-red-500">
                  <TfiTicket className="w-12 h-10 text-white" />
                </button>
                <li className=" text-white w-32">QR код</li>
              </div>
            </div>
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
