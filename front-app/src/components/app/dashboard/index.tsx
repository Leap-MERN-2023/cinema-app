import React from "react";

import FilterSection from "./filterSection";
import EventsBanner from "./eventbanner";

import CarouselCard from "../../carousel";
import { MovieCard } from "@/components";

type Props = {};

export const Dashboard = (props: Props) => {
  return (
    <div className="">
      <CarouselCard />
      <FilterSection />
      <MovieCard />
      <EventsBanner />
    </div>
  );
};
