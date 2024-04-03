"use client";
import React, { useContext } from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { EventDialog } from "./dialog/event-dialog";
import { EventContext } from "..";
import { EventCard } from "./event-card";

type Props = {};

export const Event = (props: Props) => {
  const { events } = useContext(EventContext);
  return (
    <>
      <Breadcrumb pageName="Events" />
      <EventDialog />
      <div className="flex flex-wrap gap-5">
        {events.map((event: any) => (
          <EventCard event={event} key={event._id} />
        ))}
      </div>
    </>
  );
};
