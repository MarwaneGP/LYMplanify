import { useAuth } from "@/hooks/useAuth";
import { useRouter, useSegments } from "expo-router";
import { PropsWithChildren, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const { user } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (user === null) return;

    if (user === false) {
      const path = "/" + segments.filter(Boolean).join("/");
      router.replace(`/?redirect=${encodeURIComponent(path)}`);
    }
  }, [user, segments]);

  if (user === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{children}</>;
};
