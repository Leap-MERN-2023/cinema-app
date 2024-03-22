"use client";

import React, { useState } from "react";
import { cinemas } from "./cinema";
import { Badge, Button, Card } from "@/components";

type Props = {
  changeStep: any;
};

export const CinemaSection = ({ changeStep }: Props) => {
  return (
    <div className="grid grid-cols-2 items-center gap-10 my-10 ">
      {cinemas[0].branches.map((branch: any, i) => (
        <div className="w-[380px] h-full rounded-lg bg-gray-700 " key={i}>
          <img
            src={branch.cinemaImg}
            className="h-[450px] w-[380px] rounded-t-lg  object-cover relative"
          />
          <div className="mx-5 my-2 flex flex-col gap-2 ">
            <div className="mb-1 text-slate-50 text-lg ">{branch.title}</div>
            <div className="mb-1 text-slate-300">{branch.description}</div>
            <Button className="bg-red-600 mb-2" onClick={() => changeStep()}>
              Сонгох
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
