"use client";
import React, { useState } from "react";
import { events } from "./data";
import { Button } from "@/components";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { EventBanner } from "./eventSection";

type Props = {};

export const EventPage = (props: Props) => {
  return (
    <div className="w-full h-full mx-auto container flex justify-center flex-col-reverse text-white items-center bg-gray-900">
      <div className="w-full flex mx-auto mt-20 sm:mt-28 lg:mt-40">
        <div className="w-full h-full whitespace-nowrap rounded-md mb-64">
          <EventBanner />
        </div>
      </div>
    </div>
  );
};
