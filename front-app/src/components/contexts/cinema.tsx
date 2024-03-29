"use client";

import myAxios from "@/components/utils/axios";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { ToastAction } from "@radix-ui/react-toast";

interface ICinemaContext {
  getCinema: () => Promise<void>;
  cinemas: ICinema[];
}
interface ICinema {
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

export const CinemaContext = createContext({} as ICinemaContext);

export const CinemaProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [cinemas, setCinemas] = useState([]);

  const getCinema = async () => {
    try {
      setLoading(true);
      const {
        data: { cinemas },
      } = await myAxios.get("/cinema");
      setCinemas(cinemas);
      console.log(cinemas);
      toast({
        title: "Амжилттай кино театр сонголоо.",
      });
      console.log(cinemas, "<3");
    } catch (error) {
      toast({
        description: `There was a problem with your request. ${error} `,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };
  console.log("cineams", cinemas);
  useEffect(() => {
    getCinema();
  }, []);

  return (
    <CinemaContext.Provider value={{ getCinema, cinemas }}>
      {children}
    </CinemaContext.Provider>
  );
};
