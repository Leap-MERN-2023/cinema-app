import { CiBarcode } from "react-icons/ci";
import React, { useContext, useEffect, useState } from "react";
import {
  AuthContext,
  MovieContext,
  ShowtimeContext,
  OrderContext,
  CinemaContext,
} from "@/components";
import { TicketDialog } from "./dialog";

type Props = {};

export const MovieTicket = (props: Props) => {
  return (
    <div className="w-80 z-9 bg-slate-700 rounded-3xl text-slate-300">
      <div className="bg-slate-900 relative drop-shadow-2xl  rounded-3xl p-4 m-4">
        <TicketDialog />
        <div className=" border-dashed border-b-2 pt-5">
          <div className="absolute rounded-full w-5 h-5 bg-slate-700 -mt-2 -left-2"></div>
          <div className="absolute rounded-full w-5 h-5 bg-slate-700 -mt-2 -right-2"></div>
        </div>
        <div className="w-20 mx-auto mt-2">
          <CiBarcode className="size-full" />
        </div>
      </div>
    </div>
  );
};
