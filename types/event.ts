import { Vote } from "./vote";

export interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  proposed_dates: Date[];
  owner_id: number | null;
  created_at: string;
  votes?: Vote[];
}
