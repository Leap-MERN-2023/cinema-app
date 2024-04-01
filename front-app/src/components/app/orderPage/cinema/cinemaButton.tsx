"use client";

import React, { useState } from "react";
import { Button } from "@/components";
import { CinemaSection } from "./cinemaSection";
type Props = {
  changeStep: any;
  cinemas: any;
};

export const CinemaButton = ({ cinemas, changeStep }: Props) => {
  const [click, setClick] = useState("");
  const [isActive, setIsActive] = useState("");
  const [filteredCinema, setFilteredCinema] = useState([]);

  const handleClick = (cinemaId: any, name: any) => {
    setClick(cinemaId);
    setIsActive(name);

    const filtered = cinemas.filter((cinema: any) => cinema._id === cinemaId);
    setFilteredCinema(filtered);
  };

  return (
    <div className="flex flex-col">
      <div className="flex mt-10 gap-7 justify-center">
        {cinemas.map((cinema: any, i: any) => (
          <Button
            className={`font-bold w-32 h-16 border border-white transition-all duration-75  ${
              isActive === cinema.cinemaName
                ? "text-red-500"
                : "hover:text-red-400 "
            }`}
            key={i}
            onClick={() => {
              handleClick(cinema._id, cinema.cinemaName);
            }}
          >
            {cinema.cinemaName}
          </Button>
        ))}
      </div>
      <div>
        {filteredCinema.length === 0 &&
          cinemas.map((cinema: any, i: number) => (
            <CinemaSection key={i} changeStep={changeStep} cinemas={cinema} />
          ))}
        {filteredCinema.length !== 0 &&
          filteredCinema.map((cinema: any, i: number) => (
            <CinemaSection key={i} changeStep={changeStep} cinemas={cinema} />
          ))}
      </div>
    </div>
  );
};
