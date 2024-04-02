"use client";
import React, { useState } from "react";

import { CardSection } from "./cardSection";

type Props = {};

export const ComingSoon = (props: Props) => {
  const [pageCount, setPageCount] = useState(4);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="py-16 container">
        <h1 className="font-bold text-3xl text-slate-50 my-14">
          Тун удахгүй гарах кинонууд
        </h1>
        <CardSection pageCount={pageCount} />
      </div>
      <div className="mb-10 p-3 rounded-xl bg-red-500">
        <button
          color="white"
          onClick={() => {
            setPageCount(pageCount + 4);
          }}
        >
          Show More
        </button>
      </div>
    </div>
  );
};
