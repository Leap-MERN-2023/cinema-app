"use client";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/components/utils/axios";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

interface IMovies {
  poster: {
    land: {
      land1: string;
      land2: string;
    };
    vertical: string;
  };
  _id: string;
  title: string;
  movie_trailer: string;
  duration: number;
  releaseDate: Date;
  director: string;
  synopsis: string;
  cinemas: [
    {
      location: {
        address: {
          street: string;
          city: string;
          zipCode: number;
        };
      };
      _id: string;
      name: string;
      icon: string;
      opening: string;
      closing: string;
      image: string;
    }
  ];
  movieType: string;
}

interface IMovieContext {
  movies: IMovies[];
}

export const MovieContext = createContext({} as IMovieContext);

export const MovieProvider = ({ children }: PropsWithChildren) => {
  const { toast } = useToast();
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const {
        data: { movies },
      } = await myAxios.get("/movie");
      //   console.log("GetMovies ===> ", movies);
      setMovies(movies);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `There was a problem with your request. ${error} `,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };
  //   console.log("Movies", movies);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
  );
};
