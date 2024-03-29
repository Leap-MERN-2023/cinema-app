import React from "react";

import FilterSection from "./filterSection";
import EventsBanner from "./eventbanner";
import { CarouselCard } from "@/components";
import { MovieCard } from "@/components";

type Props = {};

export const Dashboard = (props: Props) => {
  return (
    <div>
      <CarouselCard />
      <div className="container mx-auto">
        <FilterSection />
        <MovieCard />
      </div>
      <EventsBanner />
    </div>
  );
};
