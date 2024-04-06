"use client";

import { useRouter } from "next/navigation";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import myAxios from "@/components/utils/axios";

interface IUser {
  email: string;
  password?: string;
  avatarUrl?: string;
}

interface IAuthContext {
  signup: (password: string, email: string) => Promise<void>;
  login: (password: string, email: string) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
  getAllUser: () => void;
  logout: () => void;
  loginuser: IUser | null;
  token: string;
  allUser: any;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [loginuser, setUser] = useState<IUser | null>(null);
  const [allUser, setAllUser] = useState<any | null>([]);
  const [token, setToken] = useState<string>("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const setUserData = (data: any) => {
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  };

  const getAllUser = async () => {
    try {
      const { data } = await myAxios.get("/user/allcustomer");
      console.log(data, "alluser");
      setAllUser(data.allCustomers);
    } catch (error) {
      console.error("cannot get all user", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { data } = await myAxios.post("/user/login", {
        userEmail: email,
        userPassword: password,
      });
      console.log(data, "datataatatatatata");
      setUserData(data);
      getAllUser();
      handleNext();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { data } = await myAxios.post("/user/signup", {
        email: email,
        password: password,
      });
      setUserData(data);
      handleNext();
      setRefresh(!refresh);
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setIsLoggingOut(true);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
    setTimeout(() => {
      setIsLoggingOut(false);
      router.push("/");
    }, 1000);
  };

  const authLogged = () => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      getAllUser();
    }
  };

  const handleNext = () => {
    router.replace("/");
  };

  useEffect(() => {
    authLogged();
  }, []);

  const deleteUser = async (id: string) => {
    try {
      const data = await myAxios.post(`/user/deletecustomer`, {
        userId: id,
      });
      console.log("User deleted successfully", data);
    } catch (error) {
      console.error("Cannot delete user", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        signup,
        logout,
        loginuser,
        token,
        setUser,
        getAllUser,
        allUser,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
