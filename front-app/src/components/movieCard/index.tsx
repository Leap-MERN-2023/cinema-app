"use client";
import React from "react";
import { cards } from "./cards";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "..";

type Props = {};

export const MovieCard = (props: Props) => {
  return (
    <div className="mt-10 flex justify-evenly">
      {cards.map((card: any, i) => (
        <Card
          className="w-[300px] h-[500px] mb-10 rounded-lg bg-slate-500 opacity-1 transition ease-in duration-300 delay-200 hover:cursor-pointer hover:scale-105 border-2 border-pink-200 hover:border-none"
          key={i}
        >
          <img
            src={card.movieImages}
            className="h-[380px] w-[300px] rounded-t-lg relative"
          />
          <Badge variant="secondary" className="absolute mb-4">
            {card.date}
          </Badge>

          <CardFooter className="bg-slate-500 flex items-center flex-col mt-4 gap-2 rounded-b-lg">
            <p className="text-white font-bold text-2xl">{card.title}</p>
            <Button
              className="px-10 hover:opacity-1"
              onClick={() => {
                console.log(card.title, "title");
              }}
            >
              Дэлгэрэнгүй
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
