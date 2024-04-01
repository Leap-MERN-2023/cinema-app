import React from "react";
import { events } from "./data";
import { EventDialog, EventDialog2 } from "./dialog";

type Props = {};

export const EventBanner = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-wrap gap-6">
      {events.slice(0, 4).map((event, index) => (
        <div
          key={index}
          className="flex flex-col justify-between m-auto relative rounded-lg "
        >
          <img
            className="w-[400px] sm:w-[520px] md:w-[800px] rounded-md hover:border-white-500 hover:duration-300 duration-300 hover:cursor-pointer lg:opacity-65 hover:opacity-100 hover:shadow-md shadow-2xl"
            src={event.image}
          />
          <div className="absolute flex flex-row h-full">
            <p className="absolute bottom-0 p-2 mb-2 ml-2 bg-black bg-opacity-20 rounded-xl">
              {event.date}
            </p>
            <div className="absolute p-2 text-white text-3xl ml-2 bg-black mt-2 rounded-xl bg-opacity-20">
              {event.name}
            </div>
          </div>
          <EventDialog event={event} />
        </div>
      ))}
    </div>
  );
};

export const EventScroller = (props: Props) => {
  return (
    <div className="mt-6 sm:mt-12 border-8 rounded-sm border-slate-800 bg-slate-800 sm:mx-16 lg:mx-28 xl:mx-56 mb-8 md:mb-16">
      <div className="flex flex-row overflow-y-auto gap-4">
        {events.map((event) => (
          <EventDialog2 event={event} />
        ))}
      </div>
    </div>
  );
};
