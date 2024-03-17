"use client";
import React from "react";
import { cards } from "./cards";
import { cinemas } from "./cinemas";
import { MCard } from "./card";

type Props = {};

export const MovieCard = (props: Props) => {
  return (
    <div className="mt-10 flex justify-evenly">
      {cards.map((card: any, i) => {
        return <MCard card={card} i={i} />;
      })}
    </div>
  );
};
