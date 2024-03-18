"use client";
import React from "react";
import { Seats } from "./seats";
import { Separator } from "@radix-ui/react-separator";
import { TicketInfo } from "./ticketInfo";

type Props = {};

export const OrderPage = (props: Props) => {
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
