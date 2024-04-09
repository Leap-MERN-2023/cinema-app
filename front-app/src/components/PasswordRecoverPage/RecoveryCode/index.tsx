import React, { ChangeEvent } from "react";
import myAxios from "@/components/utils/axios";
import { toast } from "@/components/ui/use-toast";

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
    } catch (error) {
      toast({
        title: "OTP буруу байна",
        variant: "destructive",
        description: `Aldaa`,
      });
    }
  };

  return (
    <div className="my-32">
      <div className="flex items-center flex-col justify-center m-auto p-[32px] gap-8">
        <p className="text-center text-[28px]">Нууц үг сэргээх</p>
        <div className="w-full mb-[20px]">
          <p className="text-[16px] text-white">
            Таны <span style={{ color: "orange" }}>{email}</span> хаяг руу
            сэргээх код илгээх болно.
          </p>
          <input
            className="text-black py-2 px-4 bg-slate-300 w-full mt-4"
            name="otp"
            placeholder="Код оруулна уу"
            onChange={handleChangeInput}
          />
        </div>
        <div className="flex w-full rounded-lg">
          <button className="w-full py-4 bg-[#1f4682]" onClick={handleSendOtp}>
            Үргэлжлүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecoveryCode;
