import { Armchair } from "lucide-react";
import React from "react";

type Props = {};

const seats = [
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
];

const seatsTest = [
  {
    id: "",
    row: 1,
  },
  {},
];

export const Seats = (props: Props) => {
  return (
    <div className="h-screen bg-blue-200 text-black pt-20 flex justify-start flex-col items-center">
      <div className="h-20 w-96 border-gray-500 border-l-[25px] border-l-transparent border-r-transparent border-r-[25px] border-t-[80px] rounded-t-md overflow-hidden"></div>
      <div className="flex gap-6 pt-20">
        <div className="flex flex-col gap-2">
          {seats.map((row) => {
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
          })}
        </div>
      </div>
    </div>
  );
};
