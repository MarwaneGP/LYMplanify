import { AuthContext, IAuthContext } from "@/context/auth";
import { supabase } from "@/utils/supabase";
import { Session } from "@supabase/supabase-js";
import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";

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
      setSession(session);
      setUser(!!session);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, [authenticate]);


  return <AuthContext.Provider value={{
    user, session
  }}>{children}</AuthContext.Provider>;
};
