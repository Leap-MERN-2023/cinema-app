"use client";
import React, { useState } from "react";
import { Button } from "@/components";
import { EventBanner } from "./eventSection";
import Link from "next/link";

type Props = {};

export const EventPage = (props: Props) => {
  return (
    <div className="w-full h-full mx-auto container flex justify-center flex-col-reverse text-white items-center bg-gray-900">
      <div className="w-full flex mx-auto mt-20 sm:mt-28 lg:mt-40">
        <div className="w-full h-full whitespace-nowrap rounded-md mb-80">
          <div className="flex font-bold text-xl mb-6 sm:mb-12 sm:mx-12 md:mx-0 lg:mx-24 xl:mx-64">
            Кино эвентүүд
          </div>
          <EventBanner />
        </div>
      </div>
    </div>
  );
};
