import { AuthGuard } from "@/components/AuthGuard";
import { AppProvider } from "@/providers/app";
import { PropsWithChildren, useEffect } from "react";

export default function ProtectedLayout({ children }: PropsWithChildren) {
  return <AuthGuard>{children}</AuthGuard> ;
}
