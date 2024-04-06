"use client";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/components/utils/axios";
import { IComingSoon } from "@/types/comingsoon";

interface IComingsoonContext {
  coMovies: IComingSoon[];
}

export const ComingsoonContext = createContext({} as IComingsoonContext);

export const ComingsoonProvider = ({ children }: PropsWithChildren) => {
  const [coMovies, setCoMovies] = useState([]);

  const getMovies = async () => {
    try {
      const {
        data: { movies },
      } = await myAxios.get("/comingsoon");
      // console.log("comingsoon ===> ", movies);
      setCoMovies(movies);
    } catch (error) {}
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ComingsoonContext.Provider
      value={{
        coMovies,
      }}
    >
      {children}
    </ComingsoonContext.Provider>
  );
};
