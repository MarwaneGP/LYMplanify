import { Event } from "@/types/event";
import { createContext } from "react";

export interface IEventsContext {
  events: Event[];
}

export const EventsContext = createContext<IEventsContext | null>(null);
