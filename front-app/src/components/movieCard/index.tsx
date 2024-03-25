"use client";
import React from "react";
import { cards } from "./cards";
import { cinemas } from "./cinemas";
import { MCard } from "./card";

type Props = {};

export const MovieCard = (props: Props) => {
  return (
    <div className="mt-10 flex flex-col m-auto lg:flex-row gap-4 sm:gap-8 lg:gap-0 md:mt-8 mb-32">
      {cards.map((card: any, i) => {
        return <MCard card={card} i={i} />;
      })}
    </div>
  );
};
