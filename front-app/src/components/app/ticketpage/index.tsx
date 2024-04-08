import { MovieTicket } from "@/components/ticket";
import React from "react";

type Props = {};

function TicketPage({}: Props) {
  return (
    <div className="grid">
      <div className="flex font-bold text-xl mt-20 sm:mt-28 lg:mt-32 mb-10 sm:text-2xl md:text-3xl container sm:pl-40 md:pl-12 lg:pl-44 xl:pl-32  text-white">
        Миний тасалбар
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-56">
          <MovieTicket />
        </div>
      </div>
    </div>
  );
}

export default TicketPage;
