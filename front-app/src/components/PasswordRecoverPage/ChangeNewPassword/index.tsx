"use client";

import { Button } from "@/components/ui";
import React, { ChangeEvent } from "react";
import myAxios from "@/components/utils/axios";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { usePassword } from "@/components/contexts/passwordrecover";

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
  const { handleChangeToNewPassword, user } = usePassword();
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
          <Button
            onClick={() => {
              handleChangeToNewPassword(user.email, user.password);
            }}
            className="w-full py-4 bg-[#1f4682]"
          >
            Үргэлжлүүлэх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangeNewPassword;
