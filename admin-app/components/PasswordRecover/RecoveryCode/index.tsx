import React, { ChangeEvent } from "react";
import myAxios from "@/components/utils/axios";

interface IStepProps {
  email: string;
  otp: string;
  handleNext: () => void;
  changeSteps: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RecoveryCode = ({
  email,
  otp,
  changeSteps,
  handleChangeInput,
}: IStepProps) => {
  const handleSendOtp = async () => {
    try {
      const data = await myAxios.post("/verify/otp", {
        email,
        otp,
      });
      changeSteps();
    } catch (error) {}
  };

  return (
    <div className="my-32">
      <div className="flex items-center flex-col justify-center m-auto p-[32px] gap-8">
        <p className="text-center text-[28px]">Нууц үг сэргээх</p>
        <div className="w-full mb-[20px]">
          <p className="text-[16px] text-slate-500 ">
            Таны <span style={{ color: "orange" }}>{email}</span> хаяг руу
            сэргээх код илгээх болно.
          </p>
          <input
            className="text-black py-2 px-4 w-full bg-slate-300 mt-4"
            name="otp"
            placeholder="Код оруулна уу"
            onChange={handleChangeInput}
          />
        </div>
        <div className="flex w-[80%] rounded-lg">
          <button
            className="w-full py-4 bg-slate-700 text-white rounded-lg"
            onClick={handleSendOtp}
          >
            Үргэлжлүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecoveryCode;
