import { Armchair } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const seats = [
  [
    { seatNumber: "1-1", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "1-2", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "1-3", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "1-4", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "1-5", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "1-6", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "1-7", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "1-8", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "1-9", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "1-10", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "1-11", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "1-12", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "1-13", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "1-14", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "1-15", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "1-16", isBooked: true, isSelected: true, status: "none" },
  ],
  [
    { seatNumber: "2-1", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "2-2", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "2-3", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "2-4", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "2-5", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "2-6", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "2-7", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "2-8", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "2-9", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "2-10", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "2-11", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "2-12", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "2-13", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "2-14", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "2-15", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "2-16", isBooked: true, isSelected: true, status: "none" },
  ],
  [
    { seatNumber: "3-1", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "3-2", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "3-3", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "3-4", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "3-5", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "3-6", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "3-7", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "3-8", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "3-9", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "3-10", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "3-11", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "3-12", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "3-13", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "3-14", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "3-15", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "3-16", isBooked: true, isSelected: true, status: "none" },
  ],
  [
    { seatNumber: "4-1", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "4-2", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "4-3", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "4-4", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "4-5", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "4-6", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "4-7", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "4-8", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "4-9", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "4-10", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "4-11", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "4-12", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "4-13", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "4-14", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "4-15", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "4-16", isBooked: true, isSelected: true, status: "none" },
  ],
  [
    { seatNumber: "5-1", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "5-2", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "5-3", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "5-4", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "5-5", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "5-6", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "5-7", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "5-8", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "5-9", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "5-10", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "5-11", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "5-12", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "5-13", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "5-14", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "5-15", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "5-16", isBooked: true, isSelected: true, status: "none" },
  ],
  [
    { seatNumber: "6-1", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "6-2", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "6-3", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "6-4", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "6-6", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "6-6", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "6-7", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "6-8", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "6-9", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "6-10", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "6-11", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "6-12", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "6-13", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "6-14", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "6-15", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "6-16", isBooked: true, isSelected: true, status: "none" },
  ],
  [
    { seatNumber: "7-1", isBooked: true, isSelected: true, status: "none" },
    { seatNumber: "7-2", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "7-3", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "7-4", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "7-7", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "7-6", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "7-7", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "7-8", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "7-9", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "7-10", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "7-11", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "7-12", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "7-13", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "7-14", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "7-15", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "7-16", isBooked: true, isSelected: true, status: "none" },
  ],
  [
    { seatNumber: "8-1", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-2", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-3", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-4", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-5", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-6", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-7", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-8", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-9", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-10", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-11", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-12", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-13", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-14", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-15", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "8-16", isBooked: true, isSelected: true, status: "active" },
  ],
  [
    { seatNumber: "9-1", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-2", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-3", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-4", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-5", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-6", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-7", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-8", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-9", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-10", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-11", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-12", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-13", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-14", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-15", isBooked: true, isSelected: true, status: "active" },
    { seatNumber: "9-16", isBooked: true, isSelected: true, status: "active" },
  ],
];

export const Seats = (props: Props) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const handleSelect = (seatNumber: string) => {
    const fndIdx = selectedSeats.findIndex((el) => el === seatNumber);
    console.log("F", fndIdx);
    if (fndIdx !== -1) {
      const newSeatNumbers = selectedSeats;
      console.log("CHA", newSeatNumbers);
      newSeatNumbers.splice(fndIdx, 1);
      console.log("CHA", newSeatNumbers);
      setSelectedSeats([...newSeatNumbers]);
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <div className="h-screen text-black flex justify-center flex-col items-center">
      <p className="text-2xl text-white pb-10">Дэлгэц</p>
      <div className="h-20 w-[500px] border-gray-500 border-l-[25px] border-l-transparent border-r-transparent border-r-[25px] border-t-[80px] rounded-t-md overflow-hidden"></div>
      <div className="flex gap-6 pt-20">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col px-40">
            {seats.map((row) => {
              return (
                <div className="flex">
                  {row.map((seat) => {
                    return (
                      <div>
                        {seat.status === "active" ? (
                          <div className="w-10">
                            <Armchair
                              onClick={() => {
                                handleSelect(seat.seatNumber);
                              }}
                              size={30}
                              color={
                                selectedSeats.includes(seat.seatNumber)
                                  ? "green"
                                  : "gray"
                              }
                              opacity="70%"
                              fill={
                                selectedSeats.includes(seat.seatNumber)
                                  ? "green"
                                  : "gray"
                              }
                            />
                          </div>
                        ) : (
                          <div className="w-10"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
