import { AuthContext, IAuthContext } from "@/context/auth";
import { supabase } from "@/utils/supabase";
import { Session } from "@supabase/supabase-js";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<null | boolean>(null);
  const [session, setSession] = useState<Session | null>(null);

  const authenticate = useCallback(async () => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      // Faut voir ce qu'on fait de l'erreur
    }

    setSession(data.session);
    setUser(!!data.session);
  }, []);

  useEffect(() => {
    authenticate();

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(`Supabase auth event: ${event}`);
      setSession(session);
      setUser(!!session);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, [authenticate]);

  const value: IAuthContext = {
    user,
    session,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
