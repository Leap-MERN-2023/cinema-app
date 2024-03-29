"use client"
import React from "react";
import { Badge, CardFooter, Card } from "..";
import { DialogOpen } from "./dialog";

type Props = {
  card: any;
};

export const MCard = ({ card }: Props) => {
  return (
    <div className="h-[440px] w-[280px] sm:h-[560px] sm:w-[400px] lg:h-[480px] lg:w-[320px] overflow-hidden flex justify-center items-center mx-auto">
      <Card
        className="transition ease-in duration-200 delay-200 hover:cursor-pointer hover:scale-105 border-2 border-slate-900 bg-slate-900 shadow-none"
        onClick={() => {
          console.log("aaa==>", card.title);
        }}
      >
        <img
          src={card.poster.vertical}
          className="h-[320px] w-[240px] sm:h-[520px] sm:w-[360px] lg:h-[380px] lg:w-[300px] relative"
        />
        <Badge className="absolute mt-[-20px] bg-slate-800 shadow-none rounded-none rounded-tr-lg">
          {card.releaseDate.split("T")[0]}
        </Badge>

        <CardFooter className="bg-slate-800 flex items-center flex-col gap-2 h-[70px] sm:h-[110px] lg:h-[70px] p-2">
          <p className="text-white font-bold text-2xl hover:color-yellow mt-2">
            {card.title}
          </p>
          <DialogOpen card={card} />
        </CardFooter>
      </Card>
    </div>
  );
};
