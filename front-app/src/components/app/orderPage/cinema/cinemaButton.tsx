"use client";

import React, { useState } from "react";
import { Button } from "@/components";
import { CinemaSection } from "./cinemaSection";
type Props = {
  changeStep: any;
  cinemas: any;
};

export const CinemaButton = ({ cinemas, changeStep }: Props) => {
  const [click, setClick] = useState("66052ac321e966a4e977b24e");
  const [isActive, setIsActive] = useState("Өргөө");
  const [filteredCinema, setFilteredCinema] = useState([]);
  const handleClick = (i: any, name: any) => {
    setClick(i);
    setIsActive(name);
    setFilteredCinema(cinemas.filter((i: any) => i._id === click));
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
        {cinemas
          .filter((i: any) => i._id === click)
          .map((e: any) => (
            <CinemaSection changeStep={changeStep} cinemas={e} key={e.name} />
          ))}
      </div>
    </div>
  );
};
