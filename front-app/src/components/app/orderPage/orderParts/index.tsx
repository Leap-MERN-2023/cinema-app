import React from "react";
import { Seats } from "./seats";
import { TicketInfo } from "./ticketInfo";

type Props = {};

export const OrderIndex = (props: Props) => {
  return (
    <div className="flex w-">
      <div className="w-1/2">
        <Seats />
      </div>
      <div className="w-1/2 bg-slate-800">
        <TicketInfo />
      </div>
    </div>
  );
};
