import { createContext, useState } from 'react';

// ==== Type Definitions ====

type User = {
  id: number;
  name: string;
  email: string;
  mdp: string;
};

type Event = {
  id: number;
  title: string;
  description: string;
  location: string;
  proposed_dates: string[];
  owner_id: number;
  created_at: string;
};

type Vote = {
  user_id: number;
  event_id: number;
  selected_dates: string[];
};

type AppContextType = {
  users: User[];
  setUsers: (users: User[]) => void;

  events: Event[];
  setEvents: (events: Event[]) => void;

  votes: Vote[];
  setVotes: (votes: Vote[]) => void;
};

// ==== Context Creation ====

export const AppContext = createContext<AppContextType | undefined>(undefined);

// ==== Provider Component ====

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [votes, setVotes] = useState<Vote[]>([]);

  return (
    <AppContext.Provider value={{ users, setUsers, events, setEvents, votes, setVotes }}>
      {children}
    </AppContext.Provider>
  );
};
