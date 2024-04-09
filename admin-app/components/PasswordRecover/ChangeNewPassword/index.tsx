"use client";

import React, { ChangeEvent } from "react";
import myAxios from "@/components/utils/axios";

import { useRouter } from "next/navigation";

interface IStepProps {
  email: string;
  password: string;
  rePassword: string;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ChangeNewPassword = ({
  email,
  password,
  rePassword,
  handleChangeInput,
}: IStepProps) => {
  const router = useRouter();
  const handleChangeToNewPassword = async () => {
    try {
      if (password == rePassword) {
        const data = await myAxios.put("/verify/changepassword", {
          email,
          password,
        });

        router.replace("/");
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-32">
      <div className="flex items-center flex-col justify-center m-auto p-[32px] gap-8">
        <p className="text-center text-[28px] text-bold">Нууц үг өөрчлөх</p>
        <input
          placeholder="Шинэ нууц үг оруулах"
          onChange={handleChangeInput}
          name="password"
          className="py-2 px-4 bg-slate-300"
        />
        <input
          placeholder="Шинэ нууц үг оруулах"
          onChange={handleChangeInput}
          name="rePassword"
          className="py-2 px-4 bg-slate-300"
        />
        <div className="flex w-[50%] ">
          <button
            onClick={() => {
              handleChangeToNewPassword();
            }}
            className="w-full py-4 bg-slate-700 text-white rounded-lg"
          >
            Үргэлжлүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeNewPassword;
