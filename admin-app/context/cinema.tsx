"use client";

import myAxios from "@/components/utils/axios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { ICinemaContext } from "@/types/cinema";

export const CinemaContext = createContext({} as ICinemaContext);

export const CinemaProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedCinema, setSelectedCinema] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [cinemas, setCinemas] = useState([]);

  const getCinema = async () => {
    try {
      setLoading(true);
      const {
        data: { cinemas },
      } = await myAxios.get("/cinema");
      setCinemas(cinemas);
      console.log("hi", cinemas);
      console.log("working");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCinema();
  }, []);

  return (
    <CinemaContext.Provider
      value={{
        getCinema,
        cinemas,
        selectedCinema,
        setSelectedCinema,
        selectedBranch,
        setSelectedBranch,
        loading,
      }}
    >
      {children}
    </CinemaContext.Provider>
  );
};

export const useCinema = () => useContext(CinemaContext);
