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
        <div
          className="w-[300px] h-[500px] rounded-lg border-1 overflow-hidden"
          key={i}
        >
          <Card className="w-[300px] h-[500px] mb-10 rounded-lg opacity-1 transition ease-in duration-300 delay-200 hover:cursor-pointer hover:scale-105">
            <img
              src={card.movieImages}
              className="h-[380px] w-[300px] rounded-t-lg relative"
            />
            <Badge variant="secondary" className="absolute mb-4">
              {card.date}
            </Badge>

            <CardFooter className="bg-slate-500 flex items-center flex-col mt-4 gap-2 rounded-b-lg">
              <p className="text-white font-bold text-2xl hover:color-yellow">
                {card.title}
              </p>
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
        </div>
      ))}
    </div>
  );
};
