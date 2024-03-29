import React from "react";

import { Button, Card, CardFooter, Badge } from "@/components/";
import { cards } from "./cards";
import { CardSection } from "./cardSection";

type Props = {};

export const ComingSoon = (props: Props) => {
  return (
    <div className="py-16 container">
      <h1 className="font-bold text-3xl text-slate-50 my-14">
        Тун удахгүй гарах кинонууд
      </h1>
      <CardSection />
    </div>
  );
};
