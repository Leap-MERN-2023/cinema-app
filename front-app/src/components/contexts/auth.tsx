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

interface IUser {
  email: string;
  password?: string;
}

interface IAuthContext {
  login: (email: string, password: string) => Promise<void>;
  signup: (password: string, email: string) => Promise<void>;
  logout: () => void;
  user: any;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { toast } = useToast();

  const handleNext = () => {
    router.replace("/");
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const {
        data: { token, user },
      } = await myAxios.post("/auth/login", {
        customerEmail: email,
        customerPassword: password,
      });
      console.log("newterlee", token, user);
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));
      toast({
        title: "Амжилттай нэвтрэлээ!",
        description: "Enjoy your journey ^.^ 🫰",
        duration: 1500,
      });
      authLogged();
      handleNext();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `There was a problem with your request. ${error} `,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      setLoading(true);
      const data = await myAxios.post("/auth/signup", {
        email: email,
        password: password,
      });
      toast({
        title: "Амжилттай бүртгүүллээ",
        description: "Enjoy your journey ^.^ 🫰",
      });
      handleNext();
      setRefresh(!refresh);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `There was a problem with your request. ${error} `,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  const [user, setUser] = useState<IUser | null>();
  const [token, setToken] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const authLogged = () => {
    if (localStorage.getItem("token")) {
      setUser(JSON.parse(localStorage.getItem("user")!));
      // console.log("USER", JSON.parse(localStorage.getItem("user")!));
      setToken(localStorage.getItem("token")!);
    }
  };
  useEffect(() => {
    authLogged();
  }, []);

  const logout = () => {
    setIsLoggingOut(true);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
    setTimeout(() => {
      setIsLoggingOut(false);
    }, 1000);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ login, signup, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
