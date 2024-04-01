"use client";

import React from "react";
import { CinemaButton } from "./cinemaButton";

type Props = {
  handleForwardStep: () => void;
  cinemas: any;
};

export const CinemaCard = ({ handleForwardStep, cinemas }: Props) => {
  return (
    <div className="w-full">
      <h1 className="font-extrabold text-3xl text-slate-50 pt-20 text-center">
        Кино театр болон салбар сонголт
      </h1>
      <div>
        <CinemaButton handleForwardStep={handleForwardStep} cinemas={cinemas} />
      </div>
    </div>
  );
};
