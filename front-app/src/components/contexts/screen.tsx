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

interface IScreenContext {
  getScreen: (screenId: String) => {};
}

export const ScreenContext = createContext({} as IScreenContext);

export const ScreenProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { toast } = useToast();

  const handleNext = () => {
    router.replace("/");
  };

  const getScreen = async (screenId: String) => {
    try {
      setLoading(true);
      const { data } = await myAxios.get(`/screen/${screenId}`);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong",
        description: `There is a problem with your request. ${error}`,
        action: <ToastAction altText="Try Again">Try Again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContext.Provider value={{ getScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};
