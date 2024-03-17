import {
  MultiSelect,
  SelectCinema,
  SelectShowTime,
} from "@/components/ui/select-filter";
import React from "react";
import { ImLocation } from "react-icons/im";

const FilterSection = () => {
  return (
    <div className="flex justify-center items-center mx-auto gap-4 mt-10">
      <p className="text-lg  text-[#e5e7eb]">Filter by:</p>
      <div>
        <ImLocation className="p-3 bg-[#0089d0] w-10 h-10 text-white rounded-[5px]" />
      </div>
      <MultiSelect />
      <SelectCinema />
      <SelectShowTime />
      <button className="underline text-lg text-[#e5e7eb]">Reset</button>
    </div>
  );
};

export default FilterSection;
