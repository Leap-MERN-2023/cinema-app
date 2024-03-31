"use client";
import React, { useContext } from "react";
import { MCard } from "./card";
import { MovieContext } from "..";

type Props = {};

export const MovieCard = (props: Props) => {
  const { movies } = useContext(MovieContext);
  return (
    <div className="mt-10 grid xl:grid-cols-3 md:grid-cols-2 gap-5">
      {movies.map((card: any) => {
        return <MCard card={card} key={card._id} />;
      })}
    </div>
  );
};
