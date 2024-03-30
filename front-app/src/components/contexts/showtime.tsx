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
}

export const ShowtimeContext = createContext({} as ITimeContext);

export const ShowtimeProvider = ({ children }: PropsWithChildren) => {
  const [showtimes, setShowtimes] = useState([]);
  const { toast } = useToast();

  const getTime = async () => {
    try {
      const {
        data: { times },
      } = await myAxios.get("/showtime/", {});
      setShowtimes(times);
    } catch (error) {}
  };

  console.log("SHOWTIMES", showtimes);

  useEffect(() => {
    getTime();
  }, []);

  return (
    <ShowtimeContext.Provider value={{ showtimes }}>
      {children}
    </ShowtimeContext.Provider>
  );
};
