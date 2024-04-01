"use client";
import { useRouter } from "next/navigation";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Toast, ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import myAxios from "@/components/utils/axios";
import { AuthContext } from ".";

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
  sendShowtime: (
    selectedMovieId: string,
    selectedBranch: string,
    adultCount: number,
    kidsCount: number,
    selectedSeats: any,
    isActiveMonth: string,
    isActiveDate: string,
    isActiveTime: string
  ) => Promise<void>;
}

export const ShowtimeContext = createContext({} as ITimeContext);

export const ShowtimeProvider = ({ children }: PropsWithChildren) => {
  const [showtimes, setShowtimes] = useState([]);
  const [selectedScreen, setSelectedScreen] = useState("");
  const { toast } = useToast();
  const [seats, setSeats] = useState([]);
  const { token } = useContext(AuthContext);

  const getTime = async () => {
    try {
      const {
        data: { times },
      } = await myAxios.get("/showtime", {});
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
      setSelectedScreen(times.screen);
      setSeats(times.seats);
      console.log(times.seats);
    } catch (error) {
      console.log(error, "ALDAA GARAV");
    }
  };

  const sendShowtime = async (
    selectedMovieId: string,
    selectedBranch: string,
    adultCount: number,
    kidsCount: number,
    selectedSeats: any,
    isActiveMonth: string,
    isActiveDate: string,
    isActiveTime: string
  ) => {
    try {
      // console.log(selectedMovieId);
      // console.log(selectedBranch);
      // console.log(adultCount);
      // console.log(kidsCount);
      // console.log(selectedSeats);
      // console.log(isActiveMonth);
      // console.log(isActiveDate);
      // console.log(isActiveTime);
      await myAxios.post(
        "/ticket",
        {
          movieId: selectedMovieId,
          branch: selectedBranch,
          adultCount: adultCount,
          kidsCount: kidsCount,
          seatNumbers: selectedSeats,
          month: isActiveMonth,
          day: isActiveDate,
          time: isActiveTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast({
        variant: "default",
        title: "Тасалбар үүслээ",
      });
    } catch (error) {
      toast({
        title: "Showtime илгээхэд алдаа гарлаа",
        variant: "destructive",
        action: (
          <ToastAction altText={`Try again ${error}`}>Try Again</ToastAction>
        ),
      });
      console.log(error);
    }
  };

  console.log("SHOWTIMES", showtimes);

  useEffect(() => {
    getTime();
  }, []);

  return (
    <ShowtimeContext.Provider
      value={{ showtimes, getTimeByCinemaAndMovie, seats, sendShowtime }}
    >
      {children}
    </ShowtimeContext.Provider>
  );
};
