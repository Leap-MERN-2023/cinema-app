"use client";

import React, { useState } from "react";
import { cinemas } from "./cinema";
import { Badge, Button, Card } from "@/components";

type Props = {
  changeStep: any;
};

export const CinemaSection = ({ changeStep }: Props) => {
  return (
    <div className="grid grid-cols-2 items-center gap-10 my-5 ml-20">
      {cinemas[0].branches.map((branch: any, i) => (
        <div className="w-[380px] h-[580px] rounded-lg bg-slate-500" key={i}>
          <img
            src={branch.cinemaImg}
            className="h-[450px] w-[380px] rounded-t-lg  object-cover relative"
          />
          <div className="mb-1 text-white ">{branch.title}</div>
          <div className="mb-1 text-white">{branch.description}</div>
          <Button onClick={() => changeStep()}>Сонгох</Button>
        </div>
      ))}
    </div>
  );
};
