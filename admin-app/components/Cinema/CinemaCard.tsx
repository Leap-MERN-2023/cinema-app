"use client";

import { Divider } from "@tremor/react";
import React from "react";

type Props = {
  cinemas: any;
};

export const CinemaCard = ({ cinemas }: Props) => {
  return (
    <div className="flex justify-center flex-wrap items-center gap-6 my-10 ">
      {cinemas.map((cinema: any) => {
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {cinema?.branches.map((branch: any, i: any) => (
              <div className="w-64 h-full rounded-lg   bg-slate-800 " key={i}>
                <img
                  src={branch.image}
                  className="w-64 h-96 rounded-t-lg  object-cover relative"
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
