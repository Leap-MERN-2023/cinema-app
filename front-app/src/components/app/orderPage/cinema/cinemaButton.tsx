"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components";
import { cinemas } from "./cinema";
type Props = {};

export const CinemaButton = (props: Props) => {
  const isActive = usePathname();
  return (
    <div className="flex mt-10 gap-7 justify-center">
      {cinemas.map((cinema, i) => (
        <Button
          className={`font-bold w-32 h-16 border border-white transition-all duration-75  ${
            isActive === cinema.name ? "text-red-500" : "hover:text-red-400 "
          }`}
          key={i}
        >
          {cinema.name}
        </Button>
      ))}
    </div>
  );
};
