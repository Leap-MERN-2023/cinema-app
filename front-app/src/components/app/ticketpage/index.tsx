import { EventTicket, MovieTicket } from "@/components/ticket";
import React from "react";

type Props = {};

function TicketPage({}: Props) {
  return (
    <div className="h-[150vh] flex p-10 ">
      <div className="flex-1 text-black text-center my-auto ">
        <MovieTicket />
      </div>
      <div className="h-full bg-white w-[1px] z-10"></div>
      <div className="flex-1 text-white text-center my-auto">
        <EventTicket />
      </div>
    </div>
  );
}

export default TicketPage;
