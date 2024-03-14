import React from "react";
import CarouselCard from "../carousel";
import { MovieCard } from "@/components";

type Props = {};

export const Dashboard = (props: Props) => {
  return (
    <div className="">
      <CarouselCard />
      <MovieCard/>
    </div>
  );
};
