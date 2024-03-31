"use client";
import { useRouter } from "next/navigation";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import myAxios from "@/components/utils/axios";

interface ITimes {
  movie: string;
  cinema: string;
  branch: string;
  screen: string;
  startTime: {
    date: {
      month: string;
      day: string;
    };
    time: string;
  };
}

interface ITimeContext {
  showtimes: ITimes[];
  getTimeByCinemaAndMovie: (
    movieId: string,
    cinemaId: string,
    branch: string,
    screen: string,
    startTime: Date
  ) => Promise<void>;
  seats: any;
}

export const ShowtimeContext = createContext({} as ITimeContext);

export const ShowtimeProvider = ({ children }: PropsWithChildren) => {
  const [showtimes, setShowtimes] = useState([]);
  const { toast } = useToast();
  const [seats, setSeats] = useState([]);

  const getTime = async () => {
    try {
      const {
        data: { times },
      } = await myAxios.get("/showtime/", {});
      setShowtimes(times);
    } catch (error) {}
  };

  const getTimeByCinemaAndMovie = async (
    movieId: string,
    cinemaId: string,
    branch: string,
    screen: string,
    startTime: Date
  ) => {
    try {
      const {
        data: { times },
      } = await myAxios.post("/showtime/", {
        movieId: movieId,
        cinemaId: cinemaId,
        branch: branch,
        screen: screen,
        startTime: startTime,
      });
      setSeats(times.seats);
      console.log(times.seats);
    } catch (error) {
      console.log(error, "ALDAA GARAV");
    }
  };
  console.log("SHOWTIMES", showtimes);

  useEffect(() => {
    getTime();
  }, []);

  return (
    <ShowtimeContext.Provider
      value={{ showtimes, getTimeByCinemaAndMovie, seats }}
    >
      {children}
    </ShowtimeContext.Provider>
  );
};
