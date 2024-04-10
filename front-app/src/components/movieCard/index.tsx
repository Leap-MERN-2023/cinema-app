"use client";
import React, { useContext, useState } from "react";
import { MCard } from "./card";
import { Button, MovieContext } from "..";

type Props = {};

export const MovieCard = (props: Props) => {
  const { movies, filteredMovies } = useContext(MovieContext);
  const [pageCount, setPageCount] = useState(6);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMovies.slice(0, pageCount).map((card: any) => {
          return <MCard card={card} key={card._id} />;
        })}
      </div>
        {pageCount < filteredMovies.length && (
          <div className="mb-24 mt-8 p-3 rounded-md text-white bg-red-500 hover:bg-slate-800 duration-75">
            <button
              color="white"
              onClick={() => {
                setPageCount(pageCount + 6);
              }}
            >
              Show More
            </button>
          </div>
        )}
    </div>
  );
};
