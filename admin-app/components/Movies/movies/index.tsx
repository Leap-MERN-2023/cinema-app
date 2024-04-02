"use client";
import { useContext } from "react";
import Breadcrumb from "../../Breadcrumbs/Breadcrumb";
import { MovieCard } from "./movie-card";
import { MovieContext } from "../../context/movie";
import { MovieDialog } from "./movie-dialog";

export const Movies = () => {
  const { movies } = useContext(MovieContext);
  return (
    <>
      <Breadcrumb pageName="Movies" />
      <MovieDialog />
      <div className="flex flex-wrap gap-5">
        {movies.map((movie: any) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </>
  );
};
