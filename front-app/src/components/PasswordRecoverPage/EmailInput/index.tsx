import { Button } from "@/components/ui";
import React, { ChangeEvent } from "react";

interface IStepProps {
  email: string;
  handleNext: () => void;
  changeSteps: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput = ({ handleNext, handleChangeInput }: IStepProps) => {
  return (
    <div className="my-32">
      <div className="flex items-center flex-col justify-center m-auto p-[32px] gap-8">
        <p className="text-center text-[28px] text-bold">Нууц үг сэргээх</p>
        <p className="text-start text-[14px]">
          Та бүртгэлтэй и-мэйл хаягаа оруулна уу?
        </p>
        <input
          placeholder="Имэйл хаягаа оруулна уу"
          onChange={handleChangeInput}
          name="email"
          className="py-2 px-4 bg-slate-300"
        />
        <div className="flex w-[50%] ">
          <Button
            onClick={() => {
              handleNext();
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

export default EmailInput;