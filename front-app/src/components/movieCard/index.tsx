"use client";
import React, { useContext, useState } from "react";
import { MCard } from "./card";
import { Button, MovieContext } from "..";

type Props = {};

export const MovieCard = (props: Props) => {
  const { movies } = useContext(MovieContext);
  const [pageCount, setPageCount] = useState(8);
  return (
<<<<<<< Updated upstream
    <div className="mt-10 grid xl:grid-cols-3 md:grid-cols-2 gap-5">
      {movies.map((card: any) => {
        return <MCard card={card} key={card._id} />;
      })}
=======
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 flex flex-wrap gap-5">
        {movies.slice(0, pageCount).map((card: any) => {
          return <MCard card={card} key={card._id} />;
        })}
      </div>
      <div className="mt-12 p-3 rounded-xl bg-red-500">
        <button
          color="white"
          onClick={() => {
            setPageCount(pageCount + 4);
          }}
        >
          Show More
        </button>
      </div>
>>>>>>> Stashed changes
    </div>
  );
};
