import { Checkout } from "@/components/checkout";
import React from "react";

type Props = {};

export const OrderPage = (props: Props) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Checkout />
    </div>
  );
};
