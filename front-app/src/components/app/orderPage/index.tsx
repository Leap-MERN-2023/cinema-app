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
import { ChooseCinema, ChooseSits, DisplayQRCode } from "./order-steps";
import { TicketConfirmation } from "./order-steps/confirmation";
type Props = {};

export const OrderPage = (props: Props) => {
  const [step, setStep] = useState(1);
  const { cinemas } = useContext(CinemaContext);

  const handleForwardStep = () => {
    console.log("hello");
    // while (step <= 4) {
    setStep((step) => step + 1);
    // }`
  };

  const handleBackwardStep = () => {
    // while (step !== 0) {
    setStep((step) => step - 1);
    // }
  };

  const StepSwitch = () => {
    switch (step) {
      case 1:
        return <ChooseCinema />;
      case 2:
        return <ChooseSits />;

      case 3:
        return <TicketConfirmation />;
      case 4:
        return <DisplayQRCode />;
    }
  };

  return (
    <div className=" flex flex-col h-full bg-slate-900 pt-20 md:pt-28  items-center justify-center">
      {StepSwitch()}
      <div>
        {step === 1 && (
          <CinemaCard handleForwardStep={handleForwardStep} cinemas={cinemas} />
        )}
        {step === 2 && (
          <OrderIndex
            handleForwardStep={handleForwardStep}
            handleBackwardStep={handleBackwardStep}
          />
        )}
        {step === 3 && (
          <Checkout
            handleForwardStep={handleForwardStep}
            handleBackwardStep={handleBackwardStep}
          />
        )}
        {step === 4 && <PaymentQr />}
      </div>
    </div>
  );
};
