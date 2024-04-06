"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/components/utils/axios";
import { IMovies } from "@/types/movie";
import { useAuth } from ".";
import { toast } from "react-toastify";

interface IMovieContext {
  movies: IMovies[];
  selectedMovieId: string;
  setSelectedMovieId: (id: string) => void;
  addMovie: (movieData: any) => Promise<void>;
}

export const MovieContext = createContext({} as IMovieContext);

export const MovieProvider = ({ children }: PropsWithChildren) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState("");
  const { token } = useAuth();
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getMovies = async () => {
    try {
      const {
        data: { movies },
      } = await myAxios.get("/movie");
      // console.log("GetMovies ===> ", movies);
      setMovies(movies);
    } catch (error) {}
  };

  const addMovie = async (movieData: any) => {
    console.log("EventData = ", movieData);
    try {
      setLoading(true);
      const {
        data: { movie },
      } = await myAxios.post("/movie", movieData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRefresh(!refresh);
      toast.success("Movie added successfully!");
    } catch (error) {
      toast.error("Failed to add the Movie!");
    } finally {
      setLoading(false);
    }
  };

  const deleteMovie = async (movieId: string) => {
    try {
      setLoading(true);
      await myAxios.delete(`event/${movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRefresh(!refresh);
      toast.success("Movie deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete the Movie!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [refresh]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setSelectedMovieId,
        selectedMovieId,
        addMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);
