import React, { ChangeEvent, useContext } from "react";
import myAxios from "@/components/utils/axios";
import { toast } from "react-toastify";
import { PasswordRecoverContext } from "@/context/passwordrecover";

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
  const { handleSendOtp, user } = useContext(PasswordRecoverContext);

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
            onClick={() => {
              handleSendOtp(user.email, user.otp);
            }}
          >
            Үргэлжлүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecoveryCode;
