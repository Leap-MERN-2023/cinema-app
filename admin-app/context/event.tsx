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

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
    console.log("Files ===> ", e.currentTarget.files);
  };

  const addEvent = async (eventData: any) => {
    console.log("IMAGE = ", file);
    console.log("EventData = ", eventData);
    try {
      setLoading(true);
      const formData = new FormData();
      formData.set("name", eventData.name);
      formData.set("image", file!);
      formData.set("date", eventData.date);
      formData.set("link", eventData.link);
      formData.set("about", eventData.about);
      formData.set("location", eventData.location);
      formData.set("addition", eventData.addition);
      const {
        data: { event },
      } = await myAxios.post("/event", formData, {
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

  useEffect(() => {
    getEvents();
  }, [refresh]);

  return (
    <EventContext.Provider
      value={{ events, addEvent, isLoading, handleFileChange, deleteEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => useContext(EventContext);
