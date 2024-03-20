import { Armchair } from "lucide-react";
import React, { useState } from "react";

type Props = {};

// const seats = [
//   [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
//   [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
//   [0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
//   [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
//   [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
// ];
const seats = [
  { seatNumber: "1-A", isBooked: true, isSelected: true },
  { seatNumber: "1-B", isBooked: true, isSelected: true },
  { seatNumber: "1-C", isBooked: true, isSelected: true },
  { seatNumber: "2-A", isBooked: true, isSelected: true },
  { seatNumber: "2-B", isBooked: true, isSelected: true },
  { seatNumber: "2-C", isBooked: true, isSelected: true },
  { seatNumber: "3-A", isBooked: true, isSelected: true },
  { seatNumber: "3-B", isBooked: true, isSelected: true },
  { seatNumber: "3-C", isBooked: true, isSelected: true },
];

const seatsTest = [
  {
    id: "",
    row: 1,
  },
  {},
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
    <div className="h-screen bg-blue-200 text-black pt-20 flex justify-start flex-col items-center">
      <div className="h-20 w-96 border-gray-500 border-l-[25px] border-l-transparent border-r-transparent border-r-[25px] border-t-[80px] rounded-t-md overflow-hidden"></div>
      <div className="flex gap-6 pt-20">
        <div className="flex flex-col gap-2">
          {/* {seats.map((row) => {
            return (
              <div className="flex gap-4">
                {row.map((seat) => {
                  return (
                    <Armchair
                      size={30}
                      color={seat === 1 ? "green" : "gray"}
                      fill={seat === 1 ? "green" : "gray"}
                    />
                  );
                })}
              </div>
            );
          })} */}
          {seats.map((s) => (
            <Armchair
              onClick={() => {
                handleSelect(s.seatNumber);
              }}
              size={30}
              color={selectedSeats.includes(s.seatNumber) ? "green" : "gray"}
              fill={selectedSeats.includes(s.seatNumber) ? "green" : "gray"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
