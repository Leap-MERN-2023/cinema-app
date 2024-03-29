"use client";
import React, { useContext } from "react";
import { cards } from "./cards";
import { Badge, Button, Card, CardFooter, MovieContext } from "@/components";
import { ComingModal } from "./comingModal";

type Props = {};

export const CardSection = ({}: Props) => {
  const { movies } = useContext(MovieContext);
  return (
    <div className="flex justify-center my-10 flex-wrap gap-5 items-center">
      {movies.map((card: any) => (
        <Card
          className="w-[300px] h-[550px] rounded-lg overflow-hidden border-none bg-slate-800"
          key={card._id}
        >
          <img
            src={card.poster.vertical}
            className="h-[380px] w-full rounded-t-lg border-none relative"
          />
          <Badge variant="secondary" className="absolute mt-2 ml-2">
            {card.releaseDate.split("T")[0]}
          </Badge>

          <CardFooter className="bg-slate-800 flex items-center flex-col mt-4 gap-2 rounded-b-lg">
            <p className="text-white font-bold text-xl mt-8 overflow-hidden">
              {card.title}
            </p>
            <ComingModal card={card} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
