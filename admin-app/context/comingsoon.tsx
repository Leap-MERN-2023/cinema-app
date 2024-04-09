"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/components/utils/axios";
import { IComingSoon } from "@/types/comingsoon";
import { useAuth } from ".";
import { toast } from "react-toastify";

interface IComingsoonContext {
  coMovies: IComingSoon[];
  addComingSoon: (movieData: any) => Promise<void>;
  setVertical: (e: any) => void;
  setLandOne: (e: any) => void;
  setLandTwo: (e: any) => void;
  setCast1: (e: any) => void;
  setCast2: (e: any) => void;
  setCast3: (e: any) => void;
  deleteCMovie: (movieId: string) => Promise<void>;
  updateComing: (comingData: any, movieId: string) => Promise<void>;
  isLoading: boolean;
}

export const ComingsoonContext = createContext({} as IComingsoonContext);

export const ComingsoonProvider = ({ children }: PropsWithChildren) => {
  const [coMovies, setCoMovies] = useState([]);
  const { token } = useAuth();
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getMovies = async () => {
    try {
      const {
        data: { movies },
      } = await myAxios.get("/comingsoon");
      // console.log("comingsoon ===> ", movies);
      setCoMovies(movies);
    } catch (error) {}
  };

  const [vertical, setVertical] = useState<any>(null);
  const [landOne, setLandOne] = useState<any>(null);
  const [landTwo, setLandTwo] = useState<any>(null);
  const [cast1, setCast1] = useState<any>(null);
  const [cast2, setCast2] = useState<any>(null);
  const [cast3, setCast3] = useState<any>(null);

  const addComingSoon = async (movieData: any) => {
    console.log("EventData = ", movieData);
    try {
      setLoading(true);
      const {
        data: { movie },
      } = await myAxios.post(
        "/comingsoon",
        {
          title: movieData.title,
          vertical: vertical,
          land1: landOne,
          land2: landTwo,
          cast1img: cast1,
          cast2img: cast2,
          cast3img: cast3,
          movie_trailer: movieData.movie_trailer,
          duration: movieData.duration,
          releaseDate: movieData.releaseDate,
          director: movieData.director,
          genre: movieData.genre,
          synopsis: movieData.synopsis,
          movieType: movieData.movieType,
          cast1name: movieData.cast1,
          cast2name: movieData.cast2,
          cast3name: movieData.cast3,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setRefresh(!refresh);
      toast.success("Movie added successfully!");
    } catch (error) {
      toast.error("Failed to add the Movie!");
    } finally {
      setLoading(false);
    }
  };

  const deleteCMovie = async (movieId: string) => {
    try {
      console.log("MOVIEID ====> ", movieId);
      setLoading(true);
      await myAxios.delete(`comingsoon/${movieId}`, {
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

  const updateComing = async (comingData: any, movieId: string) => {
    try {
      setLoading(true);
      // dataEvent.image = file;
      const {
        data: { newComingData },
      } = await myAxios.put(`/comingsoon/${movieId}`, comingData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRefresh(!refresh);
      toast.success("Movie updated successfully!", { autoClose: 1500 });
    } catch (error) {
      toast.error("Failed to update the movie!", { autoClose: 1500 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [refresh]);

  return (
    <ComingsoonContext.Provider
      value={{
        coMovies,
        addComingSoon,
        setVertical,
        setLandOne,
        setLandTwo,
        setCast1,
        setCast2,
        setCast3,
        deleteCMovie,
        isLoading,
        updateComing,
      }}
    >
      {children}
    </ComingsoonContext.Provider>
  );
};

export const useComingSoon = () => useContext(ComingsoonContext);
