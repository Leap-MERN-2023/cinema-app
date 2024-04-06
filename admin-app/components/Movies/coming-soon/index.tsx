"use client";
import React, { useContext } from "react";
import Breadcrumb from "../../Breadcrumbs/Breadcrumb";
import { ComingsoonContext } from "../../../context/comingsoon";
import { MovieCard } from "./movie-card";
import { ComingsoonDialog } from "./coming-soon-dialog";

type Props = {};

export const ComingSoon = (props: Props) => {
  const { coMovies } = useContext(ComingsoonContext);
  return (
    <>
      <Breadcrumb pageName="Coming-soon" />
      <ComingsoonDialog />
      <div className="flex flex-wrap gap-5">
        {coMovies.map((movie: any) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </>
  );
};
