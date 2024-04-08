import React, { ChangeEvent } from "react";

type Props = {
  label: string;
  desc?: string;
  name?: string;
  type: "text" | "number" | "file" | "date"; // HTMLInputElement["type
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = ({ label, desc, name, onChange, type }: Props) => {
  return (
    <fieldset className="mb-[15px] w-full flex flex-col justify-start">
      <label
        className="text-[13px] leading-none mb-2.5 text-violet12 block"
        htmlFor="cast"
      >
        {label}
      </label>
      <input
        className="grow pt-1.5 shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
        id={name}
        placeholder={desc}
        type={type}
        name={name}
        onChange={onChange}
      />
    </fieldset>
  );
};
