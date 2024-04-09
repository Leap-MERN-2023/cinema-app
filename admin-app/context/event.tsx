"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { TEventContext } from "@/types/event";
import myAxios from "@/components/utils/axios";
import { toast } from "react-toastify";
import { useAuth } from ".";
import { headers } from "next/headers";

export const EventContext = createContext({} as TEventContext);

export const EventProvider = ({ children }: PropsWithChildren) => {
  const [events, setEvents] = useState([]);
  const { token } = useAuth();
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getEvents = async () => {
    try {
      const {
        data: { events },
      } = await myAxios.get("/event");
      // console.log("events ===> ", events);
      setEvents(events);
    } catch (error) {
      console.log("Error in getting Events", error);
    }
  };

  const [file, setFile] = useState<any>(null);

  const addEvent = async (eventData: any) => {
    console.log("IMAGE = ", file);
    console.log("EventData = ", eventData);
    try {
      setLoading(true);
      eventData.image = file;
      const {
        data: { event },
      } = await myAxios.post("/event", eventData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRefresh(!refresh);
      toast.success("Event added successfully!");
    } catch (error) {
      toast.error("Failed to add the Event!");
    } finally {
      setLoading(false);
    }
  };

  const deleteEvent = async (eventid: string) => {
    try {
      setLoading(true);
      await myAxios.delete(`event/${eventid}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRefresh(!refresh);
      toast.success("Event deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete the Event!");
    } finally {
      setLoading(false);
    }
  };

  const updateEvent = async (dataEvent: any, eventId: string) => {
    try {
      setLoading(true);
      dataEvent.image = file;
      const {
        data: { newEventData },
      } = await myAxios.put(`/event/${eventId}`, dataEvent, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRefresh(!refresh);
      toast.success("Event updated successfully!", { autoClose: 1500 });
    } catch (error) {
      toast.error("Failed to update the Event!", { autoClose: 1500 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, [refresh]);

  return (
    <EventContext.Provider
      value={{ events, addEvent, isLoading, setFile, deleteEvent, updateEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => useContext(EventContext);
