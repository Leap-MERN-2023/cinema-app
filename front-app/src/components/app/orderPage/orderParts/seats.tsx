import { ScreenContext } from "@/components/contexts/screen";
import { Armchair } from "lucide-react";
import React, { useContext, useState } from "react";

type Props = {};

export const Seats = (props: Props) => {
  const { screens } = useContext(ScreenContext);
  const [allSeats, setAllSeats] = useState([]);
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
            {screens[1]?.seats.map((row: any, i: any) => {
              return (
                <div className="flex" key={i}>
                  {row.map((seat: any, i: any) => {
                    return (
                      <div key={i}>
                        {seat.isNull === "false" ? (
                          <div className={`w-10 hover:cursor-pointer`}>
                            <Armchair
                              onClick={() => {
                                if (seat.status === "available")
                                  handleSelect(seat.seatNumber);
                              }}
                              size={30}
                              color={
                                selectedSeats.includes(seat.seatNumber)
                                  ? "red"
                                  : "white"
                              }
                              fill={
                                seat.status === "unavailable" ? "white" : "none"
                              }
                              opacity="70%"
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
