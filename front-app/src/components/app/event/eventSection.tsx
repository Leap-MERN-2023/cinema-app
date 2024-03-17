import React from "react";
import { events } from "./data";
import { Button } from "@/components";

type Props = {};

export const EventSection = (props: Props) => {
  return (
    <div className="flex w-max space-x-4 p-4 mt-14">
      {events.map((event, i) => (
        <div
          key={i}
          className="py-10 px-10  flex flex-col justify-between items-center gap-3 w-[600px]"
        >
          <img
            className=" w-full h-full rounded-lg"
            src={event.image}
            alt="image"
          />
          <div>
            <h5 className="py-3 font-bold">Тухай</h5>
            <p className="text-sm text-wrap">{event.about}</p>
          </div>
          <div>
            <h5 className="py-3 font-bold">Үйл ажиллагаа</h5>
            <p className="text-sm text-wrap">{event.addition}</p>
          </div>
          <div>
            <h6 className="py-3 font-bold">Байршил</h6>
            <p className="text-sm text-wrap">{event.location}</p>
          </div>
          <Button className="bg-red-500 px-10">Захиалах</Button>
        </div>
      ))}
    </div>
  );
};
export const EventBanner = (props: Props) => {
  return (
    <div className="flex flex-col w-max  ">
      {events.map((event, index) => (
        <div
          key={index}
          className=" flex flex-col my-4 w-[350px] h-[155px] justify-between relative rounded-lg hover:border-red-500 hover:border-2 hover:cursor-pointer hover:opacity-50 hover:shadow-md hover:shadow-red-500"
        >
          <img
            className=" w-[350px] h-[150px] rounded-lg absolute"
            src={event.image}
          />
          <div className="absolute flex flex-row h-full mt-24 gap-14 ">
            <div className="text-white text-4xl ml-2">{event.name}</div>
            <p className="mt-3">{event.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
