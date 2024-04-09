import { ChangeEvent } from "react";

export interface IEvent {
  name: string;
  image: string;
  date: string;
  link: string;
  about: string;
  location: string;
  addition: string;
}
export type TEventContext = {
  events: IEvent[];
<<<<<<< Updated upstream
  addEvent: (eventData: IEvent) => Promise<void>;
  setFile: (e: string) => void;
=======
  addEvent: (eventData: any) => Promise<void>;
  setFile: (e: any) => void;
>>>>>>> Stashed changes
  deleteEvent: (eventId: string) => Promise<void>;
  isLoading: boolean;
  updateEvent: (eventData: IEvent, eventId: string) => Promise<void>;
};
