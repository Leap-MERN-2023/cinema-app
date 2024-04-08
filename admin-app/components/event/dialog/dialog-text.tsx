import React from "react";

type Props = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DialogText = ({ handleInputChange }: Props) => {
  return (
    <div className="flex  flex-col lg:flex-row gap-4 w-full">
      <div>
        <fieldset className="mb-[15px] w-[250px] flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            name="name"
            onChange={handleInputChange}
            id="title"
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="date"
          >
            date
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            name="date"
            onChange={handleInputChange}
            type="Date"
            id="synopsis"
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="Event about"
          >
            About
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="director"
            name="about"
            onChange={handleInputChange}
            type="text"
          />
        </fieldset>
      </div>
      <div>
        <fieldset className="mb-[15px] w-[250px] flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="cast"
            name="location"
            onChange={handleInputChange}
            type="text"
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="addition"
          >
            Addition
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="cast"
            name="addition"
            onChange={handleInputChange}
            type="text"
          />
        </fieldset>
      </div>
    </div>
  );
};
