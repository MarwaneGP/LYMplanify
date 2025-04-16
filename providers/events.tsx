import { EventsContext, IEventsContext } from "@/context/events";
import { PropsWithChildren } from "react";

export const EventsProvider = ({ children }: PropsWithChildren) => {
  const value: IEventsContext = {
    events: [],
  };

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
};
