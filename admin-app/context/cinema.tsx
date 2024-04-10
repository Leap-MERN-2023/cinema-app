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
import { toast } from "react-toastify";

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

  const putCinema = async (formData: any, cinemaId: string) => {
    console.log("CINEMAID === ", cinemaId);
    try {
      setLoading(true);
      const {
        data: { cinemas },
      } = await myAxios.put(`/cinema/${cinemaId}`, {
        cinema: formData.cinemaName,
        branchName: formData.branch,
        location: formData.location,
        image: formData.image,
      });
      setCinemas(cinemas);
      console.log("hi", cinemas);
      toast.success("Cinema updated successfully!");
      console.log("working");
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteCinema = async (branch: string) => {
    try {
      setLoading(true);
      const {
        data: { cinemas },
      } = await myAxios.post("/cinema/delete", {
        branchName: branch,
      });
      setCinemas(cinemas);
      console.log("hi", cinemas);
      toast.success("Cinema delete successfully!");
      console.log("working");
    } catch (error) {
      console.log("error", error);
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
        deleteCinema,
        putCinema,
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
