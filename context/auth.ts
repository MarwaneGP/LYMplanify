import { Session } from "@supabase/supabase-js";
import { createContext } from "react";

export interface IAuthContext {
  user: null | boolean;
  session: Session | null;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  session: null,
});
