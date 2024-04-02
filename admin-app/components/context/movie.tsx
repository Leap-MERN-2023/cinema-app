"use client";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/components/utils/axios";
import { IMovies } from "@/types/movie";

interface IMovieContext {
  movies: IMovies[];
  selectedMovieId: string;
  setSelectedMovieId: (id: string) => void;
}

export const MovieContext = createContext({} as IMovieContext);

export const MovieProvider = ({ children }: PropsWithChildren) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState("");

  const getMovies = async () => {
    try {
      const {
        data: { movies },
      } = await myAxios.get("/movie");
      // console.log("GetMovies ===> ", movies);
      setMovies(movies);
    } catch (error) {}
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setSelectedMovieId,
        selectedMovieId,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
