"use client";
import React, { useState } from "react";
import { events } from "./data";
import { Button } from "@/components";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { EventBanner, EventSection } from "./eventSection";

type Props = {};

export const EventPage = (props: Props) => {
  return (
    <div className=" mx-auto container flex justify-center text-white items-center bg-gray-900">
      <div className="w-[50%] bg-gray-800 flex flex-col mx-auto container mt-5">
        <ScrollArea className="w-full h-[700px] whitespace-nowrap rounded-md">
          <EventBanner />
          <EventBanner />
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>

      <div className="w-[50%]">
        <ScrollArea className="w-full  whitespace-nowrap rounded-md">
          <EventSection />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};
