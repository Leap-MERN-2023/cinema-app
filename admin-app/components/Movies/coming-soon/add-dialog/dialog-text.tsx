import React, { ChangeEvent } from "react";

import * as RadioGroup from "@radix-ui/react-radio-group";

import { InputField } from "@/components/utils/input-field";
import { Flex } from "@radix-ui/themes";

type Props = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const typesMovie = [
  { name: "2D", id: "2D" },
  { name: "3D", id: "3D" },
  { name: "IMAX", id: "IMAX" },
  { name: "LASER", id: "LASER" },
];

export const DialogText = ({ handleInputChange }: Props) => {
  return (
    <div className="flex gap-4 w-full">
      <div>
        <InputField
          desc="Киноны нэр"
          label="Title"
          name="title"
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Киноны тайлбар"
          label="Synopsis"
          name="synopsis"
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Киноны Найруулагч"
          label="Director"
          name="director"
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Киноны үргэлжлэх хугацаа"
          label="Duration"
          name="duration"
          type={"number"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Киноны төрөл"
          label="Genre"
          name="genre"
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Гарах өдөр"
          label="Release - date"
          name="releaseDate"
          type={"date"}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <InputField
          desc="Жүжигчин 1"
          label="Cast 1"
          name="cast1"
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Жүжигчин 2"
          label="Cast 2"
          name="cast2"
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Жүжигчин 3"
          label="Cast 3"
          name="cast3"
          type={"text"}
          onChange={handleInputChange}
        />
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="movieType"
          >
            Movie-type{" (check movie-type)"}
          </label>
          <Flex direction="row">
            {typesMovie.map((type: any, i: any) => (
              <RadioGroup.Root
                key={i}
                defaultChecked={"2D" === type.id ? true : false}
                name="movieType"
                value={type.id}
                onChange={handleInputChange}
                className="flex flex-row gap-7"
              >
                <RadioGroup.Item
                  className="bg-white px-2 w-full h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                  value={type.id}
                >
                  {type.name}
                </RadioGroup.Item>
              </RadioGroup.Root>
            ))}
          </Flex>
        </fieldset>
      </div>
    </div>
  );
};
