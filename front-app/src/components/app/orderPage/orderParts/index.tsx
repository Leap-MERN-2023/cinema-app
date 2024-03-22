import React from "react";
import { Seats } from "./seats";
import { TicketInfo } from "./ticketInfo";

type Props = {
  changeStep: any;
};

export const OrderIndex = ({ changeStep }: Props) => {
  return (
    <div className="flex gap-14 justify-center items-center mt-10">
      <div className="w-1/2">
        <Seats />
      </div>
      <div className="w-1/2 bg-slate-800">
        <TicketInfo changeStep={changeStep} />
      </div>
    </div>
  );
};
