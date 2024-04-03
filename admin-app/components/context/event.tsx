"use client";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { TEventContext } from "@/types/event";
import myAxios from "@/components/utils/axios";

export const EventContext = createContext({} as TEventContext);

export const EventProvider = ({ children }: PropsWithChildren) => {
  const [events, setEvents] = useState([]);
  const [refresh, setRefresh] = useState<boolean>(true);

  const getEvents = async () => {
    try {
      const {
        data: { events },
      } = await myAxios.get("/event");
      // console.log("events ===> ", events);
      setEvents(events);
      setRefresh(!refresh);
    } catch (error) {
      console.log("Error in getting Events", error);
    }
  };

  useEffect(() => {
    getEvents();
  }, [refresh]);

  return (
    <EventContext.Provider value={{ events }}>{children}</EventContext.Provider>
  );
};
