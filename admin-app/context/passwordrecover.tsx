"use client";

import myAxios from "@/components/utils/axios";
import {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface IPasswordContext {
  setUser: (
    email: string,
    password: string,
    rePassword: string,
    otp: string
  ) => void;
  user: any;
  handleNext: () => void;
  changeSteps: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  activeStep: number;
  handleChangeToNewPassword: (email: string, password: string) => void;
  handleSendOtp: (email: string, otp: string) => void;
}

export const PasswordRecoverContext = createContext({} as IPasswordContext);

export const PasswordRecoverProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const [activeStep, setActivestep] = useState(1);

  const [user, setUser] = useState<any>({
    email: "",
    password: "",
    rePassword: "",
    otp: "",
  });

  const changeSteps = () => {
    setActivestep((prev) => prev + 1);
  };

  const handleNext = async () => {
    try {
      const { data } = await myAxios.post<any>("/verify/send-email", {
        email: user.email,
      });
      changeSteps();
    } catch (error) {
      console.log(error);
      toast.error("И-мэйл хаяг буруу байна.");
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendOtp = async (email: string, otp: string) => {
    try {
      const data = await myAxios.post("/verify/otp", {
        email,
        otp,
      });
      changeSteps();
    } catch (error) {
      toast.error("OTP код буруу байна.");
    }
  };
  const handleChangeToNewPassword = async (email: string, password: string) => {
    try {
      if (user.password == user.rePassword) {
        const data = await myAxios.put("/verify/changepassword", {
          email,
          password,
        });
        toast.success("Нууц үг амжилттай солигдлоо.");
        router.replace("/");
      } else {
      }
    } catch (error) {
      console.log(error);
      toast.error("");
    }
  };

  return (
    <PasswordRecoverContext.Provider
      value={{
        setUser,
        handleNext,
        changeSteps,
        handleChangeInput,
        activeStep,
        handleChangeToNewPassword,
        handleSendOtp,
        user,
      }}
    >
      {children}
    </PasswordRecoverContext.Provider>
  );
};

export const usePassword = () => useContext(PasswordRecoverContext);
