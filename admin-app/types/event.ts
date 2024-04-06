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
  addEvent: (eventData: any) => Promise<void>;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  deleteEvent: (eventId: string) => Promise<void>;
  isLoading: boolean;
};
