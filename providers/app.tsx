import { PropsWithChildren } from "react";
import { AuthProvider } from "./auth";
import { EventsProvider } from "./events";

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <AuthProvider>
      <EventsProvider>{children}</EventsProvider>
    </AuthProvider>
  );
};
