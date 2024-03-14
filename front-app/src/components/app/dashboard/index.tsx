import {
  MultiSelect,
  SelectCinema,
  SelectShowTime,
} from "@/components/ui/select-filter";
import { ImLocation } from "react-icons/im";

import React from "react";
import EventsBanner from "@/components/ui/eventbanner";

type Props = {};
interface CinemaOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const cinemasNameOption: readonly CinemaOption[] = [
  { value: "urgoo1", label: "Urgoo", color: "#00B8D9", isFixed: false },
  { value: "urgoo2", label: "Urgoo 2", color: "#0052CC", isDisabled: false },
  { value: "tengis", label: "Tengis", color: "#5243AA" },
  { value: "gegeenten", label: "Gegeenten", color: "#FF5630", isFixed: false },
];

export const Dashboard = (props: Props) => {
  return (
    <div className="">
      {/* <div className="flex items-center justify-around w-full gap-2">
        <p className="text-xl">Filter by:</p>
        <div>
          <ImLocation className="p-4 bg-[#0089d0] w-full h-full text-white rounded-[5px]" />
        </div>
        <MultiSelect />
        <SelectCinema />
        <SelectShowTime />
        <button className="underline text-lg">Reset</button>
      </div> */}
      <EventsBanner />
    </div>
  );
};
