import {
  MultiSelect,
  SelectCinema,
  SelectShowTime,
} from "@/components/ui/select-filter";
import React from "react";
import { ImLocation } from "react-icons/im";

const FilterSection = () => {
  return (
    <div className="flex items-center justify-around w-full gap-2">
      <p className="text-xl">Filter by:</p>
      <div>
        <ImLocation className="p-4 bg-[#0089d0] w-full h-full text-white rounded-[5px]" />
      </div>
      <MultiSelect />
      <SelectCinema />
      <SelectShowTime />
      <button className="underline text-lg">Reset</button>
    </div>
  );
};

export default FilterSection;
