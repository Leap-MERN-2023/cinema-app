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
    lands: {
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
  genre: string;
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
  setSelectedMovieId: (id: any) => void;
  setFilterByScreenType: ([]: any) => void;
  allFilteredMovies: () => void;
  setFilterByCinema: (id: any) => void;
  setFilteredMovies: (e: any) => void;
  filterByCinema: any;
  selectedMovieId: string;
  filterByScreenType: any;
  filteredMovies: any;
}

export const MovieContext = createContext({} as IMovieContext);

export const MovieProvider = ({ children }: PropsWithChildren) => {
  const { toast } = useToast();
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<any>([]);
  const [filterByScreenType, setFilterByScreenType] = useState([]);
  const [filterByCinema, setFilterByCinema] = useState<any>([]);

  const getMovies = async () => {
    try {
      const {
        data: { movies },
      } = await myAxios.get("/movie");
      console.log("GetMovies ===> ", movies);
      setMovies(movies);
      setFilteredMovies(movies);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `There was a problem with your request. ${error} `,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  const allFilteredMovies = () => {
    const filteredbyCinemas = movies.filter((movie: any) => {
      return movie.cinemas.filter((e: any) => {
        return e == filterByCinema.value;
      });
    });
    if (filterByScreenType.length == 0) {
      setFilteredMovies(filteredbyCinemas),
        console.log(filteredbyCinemas, "gg");
    } else {
      const filteredbyCinemaTypes = filteredbyCinemas.filter((movie: any) => {
        return filterByScreenType
          .map((e: any) => e.value)
          .includes(movie.movieType);
      });
      setFilteredMovies(filteredbyCinemaTypes),
        console.log(filteredbyCinemaTypes, "gg");
    }
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
        setFilterByScreenType,
        setFilterByCinema,
        filterByCinema,
        filterByScreenType,
        setFilteredMovies,
        filteredMovies,
        allFilteredMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
