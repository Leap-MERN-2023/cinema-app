import React from "react";

import FilterSection from "./filterSection";
import EventsBanner from "./eventbanner";
import { CarouselCard } from "@/components";
import { MovieCard } from "@/components";

type Props = {};

export const Dashboard = (props: Props) => {
  return (
    <div className="mx-80">
      <CarouselCard />
      <FilterSection />
      <MovieCard />
      <EventsBanner />
    </div>
  );
};
