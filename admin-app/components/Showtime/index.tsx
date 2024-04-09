"use client";
import React from "react";
import { useCinema, useShowtime } from "@/context";
import { Divider } from "@tremor/react";
import Modal from "./modal";

const Showtime = () => {
  const { showtimes } = useShowtime();
  const { cinemas } = useCinema();
  const today = new Date();
  const tomorrow = new Date(+Date() + 24 * 60 * 60 * 1000);

  return (
    <div className="flex flex-col justify-center items-start gap-4 py-6 text-white font-bold px-6">
      <Modal />
      {cinemas.map((cinema: any) => {
        return (
          <div>
            <p className="text-black text-semibold text-xl my-2">
              {cinema.cinemaName}
            </p>
            <div className="flex flex-wrap gap-4">
              {cinema?.branches.map((branch: any, i: any) => (
                <div
                  className="w-[330px] h-full rounded-xl border-[0.5px] border-slate-800 bg-slate-800 drop-shadow-xl"
                  key={i}
                >
                  <img
                    src={branch.image}
                    className="h-[450px] w-[380px] rounded-t-lg  object-cover relative"
                  />
                  <div className="mx-5 my-2 flex flex-col gap-2 ">
                    <div className="mb-1 text-slate-50 text-lg ">
                      {branch.name}
                    </div>
                    <div className="mb-1 text-slate-300">
                      {branch.location.address.street}
                    </div>
                  </div>
                  <div className="w-20 h-20 mx-5 my-4 flex flex-col gap-2">
                    <div>Өнөөдөр</div>
                    <div className="flex gap-4 h-6">
                      {showtimes
                        .filter(
                          (showtime: any) => showtime.branch === branch.name
                        )
                        .filter(
                          (showtime: any) =>
                            Number(showtime.startTime.date.day) ===
                            today.getDate()
                        )
                        .sort()
                        .map((showtime: any) => {
                          return (
                            <div className="bg-white text-black rounded-lg px-2">
                              <div>{showtime.startTime.time}</div>
                            </div>
                          );
                        })}
                    </div>
                    <div>Маргааш</div>
                    <div className="flex gap-4">
                      {showtimes
                        .filter(
                          (showtime: any) => showtime.branch === branch.name
                        )
                        .filter(
                          (showtime: any) =>
                            Number(showtime.startTime.date.day) ===
                            tomorrow.getDate()
                        )
                        .sort()
                        .map((showtime: any) => {
                          return (
                            <div className="bg-white text-black">
                              <div>{showtime.startTime.time}</div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              ))}
              <Divider />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Showtime;
