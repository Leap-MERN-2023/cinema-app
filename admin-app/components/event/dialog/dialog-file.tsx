import React, { ChangeEvent } from "react";

type Props = {
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DialogFile = ({ handleFileChange, handleInputChange }: Props) => {
  return (
    <div className="flex gap-4">
      <div>
        <fieldset className="mb-[15px] w-[250px] flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="Facebook link"
          >
            Link {"(Facebook link format only)"}
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="trailer"
            name="link"
            onChange={handleInputChange}
            type="url"
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="EventImg"
          >
            Poster {"(Event poster image)"}
          </label>
          <input
            className="grow pt-2 shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="vertical"
            onChange={handleFileChange}
            type="file"
          />
        </fieldset>
      </div>
    </div>
  );
};
