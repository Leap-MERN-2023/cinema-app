import React, { useContext } from "react";
import { Seats } from "./seats";
import { TicketInfo } from "./ticketInfo";
import { ShowtimeContext } from "@/components/contexts/showtime";

type Props = {
  changeStep: any;
};

export const OrderIndex = ({ changeStep }: Props) => {
  const { showtimes } = useContext(ShowtimeContext);
  return (
    <div className="flex justify-center items-center ">
      <TicketInfo changeStep={changeStep} />
    </div>
  );
};
