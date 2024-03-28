"use client";

import React from "react";
import { CinemaSection } from "./cinemaSection";
import { CinemaButton } from "./cinemaButton";

type Props = {
  changeStep: any;
  cinemas: any;
};

export const CinemaCard = ({ changeStep, cinemas }: Props) => {
  return (
    <div className="w-full">
      <h1 className="font-extrabold text-3xl text-slate-50 pt-20 text-center">
        Кино театр болон салбар сонголт
      </h1>
      <div>
        <CinemaButton changeStep={changeStep} cinemas={cinemas} />
      </div>
    </div>
  );
};
