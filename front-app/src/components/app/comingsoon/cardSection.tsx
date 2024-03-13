import React from "react";
import { cards } from "./cards";
import { Badge, Button, Card, CardFooter } from "@/components";

type Props = {};

export const CardSection = (props: Props) => {
  return (
    <div className="flex justify-between my-10 ">
      {cards.map((card: any, i) => (
        <Card className="w-[300px] h-[500px] rounded-lg bg-slate-500" key={i}>
          <img
            src={card.movieImages}
            className="h-[380px] rounded-t-lg relative"
          />
          <Badge variant="secondary" className="absolute mb-4">
            {card.date}
          </Badge>

          <CardFooter className="bg-slate-500 flex items-center flex-col mt-4 gap-2 rounded-b-lg">
            <p className="text-white font-bold text-2xl">Barbie</p>
            <Button className="px-10 hover:opacity-1">Дэлгэрэнгүй</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
