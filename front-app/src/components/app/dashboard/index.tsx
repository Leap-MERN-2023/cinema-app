import React from "react";
import FilterSection from "./filterSection";
import EventsBanner from "./eventbanner";

type Props = {};

export const Dashboard = (props: Props) => {
  return (
    <div className="">
      <FilterSection />
      <EventsBanner />
    </div>
  );
};
