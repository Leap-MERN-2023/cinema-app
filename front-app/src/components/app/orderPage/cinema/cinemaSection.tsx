"use client";

import React, { useContext } from "react";
import { Button, CinemaContext, ShowtimeContext } from "@/components";

type Props = {
  handleForwardStep: () => void;
  cinemas: any;
};

export const CinemaSection = ({ handleForwardStep, cinemas }: Props) => {
  const { showtimesByMovie, setShowtimesByCinema } =
    useContext(ShowtimeContext);
  const { setSelectedBranch } = useContext(CinemaContext);
  const handleClick = (branchName: string) => {
    handleForwardStep();
    setShowtimesByCinema(
      showtimesByMovie.filter((showtime: any) => showtime.branch === branchName)
    );
    setSelectedBranch(branchName);
    console.log("console log on orderPage/cinema", showtimesByMovie);
  };
  return (
    <div className="grid grid-cols-2 items-center gap-10 my-10 ">
      {cinemas.branches?.map((branch: any, i: any) => (
        <div className="w-[380px] h-full rounded-lg bg-gray-700 " key={i}>
          <img
            src={branch.image}
            className="h-[450px] w-[380px] rounded-t-lg  object-cover relative"
          />
          <div className="mx-5 my-2 flex flex-col gap-2 ">
            <div className="mb-1 text-slate-50 text-lg ">{branch.name}</div>
            <div className="mb-1 text-slate-300">
              {branch.location.address.street}
            </div>
            <Button
              className="bg-red-600 mb-2"
              onClick={() => {
                handleClick(branch.name);
              }}
            >
              Сонгох
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
