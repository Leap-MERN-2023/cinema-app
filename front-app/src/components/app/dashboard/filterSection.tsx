import {
  MultiSelect,
  SelectCinema,
  SelectShowTime,
} from "@/components/ui/select-filter";
import React from "react";
import { ImLocation } from "react-icons/im";

const FilterSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mx-auto gap-4 mt-10 sm:mb-20 justify-center">
      <div className="flex flex-row items-center gap-6 sm:mr-6">
        <p className="text-[14px] text-[#e5e7eb] whitespace-nowrap">
          Filter by:
        </p>
        <div>
          <ImLocation className="p-3 bg-[#0089d0] w-9 h-9 text-white rounded-[5px] size-4" />
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <MultiSelect />
        <SelectCinema />
        <SelectShowTime />
      </div>
      <button className="underline text-[14px] text-[#e5e7eb] sm:ml-6">
        Reset
      </button>
    </div>
  );
};

export default FilterSection;
