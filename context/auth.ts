import { User } from "@/types/user";
import { createContext } from "react";

export interface IAuthContext {
  user: User | null;
}

export const AuthContext = createContext<IAuthContext | null>(null);
