"use client";
import React, { useContext } from "react";
import { Badge, Button, Card, CardFooter, MovieContext } from "@/components";
import { ComingModal } from "./comingModal";
import { ComingsoonContext } from "@/components/contexts/comingsoon";

type Props = {
  pageCount: number;
};

export const CardSection = ({ pageCount }: Props) => {
  const { coMovies } = useContext(ComingsoonContext);
  return (
    <div className="flex justify-center my-10 flex-wrap gap-5 items-center">
      {coMovies.slice(0, pageCount).map((card: any) => (
        <Card
          className="w-[300px] h-[550px] rounded-lg overflow-hidden border-none bg-slate-800"
          key={card._id}
        >
          <img
            src={card.poster.vertical}
            className="h-[380px] w-full rounded-t-lg border-none relative"
          />
          <Badge
            variant="secondary"
            className="absolute mt-2 ml-2 bg-black bg-opacity-20 text-slate-100"
          >
            {card.releaseDate.split("T")[0]}
          </Badge>

          <CardFooter className="bg-slate-800 flex items-center flex-col mt-8 gap-2 rounded-b-lg relative">
            <p className="text-white font-bold text-xl mt-5 text-center overflow-hidden absolute">
              {card.title}
            </p>
            <ComingModal card={card} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
