import { AuthContext, IAuthContext } from "@/context/auth";
import { useContext } from "react";

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
