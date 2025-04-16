import { EventsContext, IEventsContext } from "@/context/events";
import { useContext } from "react";

export const useEvents = (): IEventsContext => {
  const context = useContext(EventsContext);

  if (!context) {
    throw new Error("useEvents must be used within an EventsProvider");
  }

  return context;
};
