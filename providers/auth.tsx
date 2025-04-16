import { AuthContext, IAuthContext } from "@/context/auth";
import { PropsWithChildren } from "react";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const value: IAuthContext = {
    user: null,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
