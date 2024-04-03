"use client";

import { Divider } from "@tremor/react";
import React from "react";

type Props = {
  cinemas: any;
};

export const CinemaCard = ({ cinemas }: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-10 my-10 ">
      {cinemas.map((cinema: any) => {
        return (
          <div className="flex flex-wrap  gap-4">
            {cinema?.branches.map((branch: any, i: any) => (
              <div
                className="w-[330px] h-full rounded-lg border-[0.5px]  bg-slate-800 "
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
              </div>
            ))}
            <Divider />
          </div>
        );
      })}
    </div>
  );
};
