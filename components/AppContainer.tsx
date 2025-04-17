import { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";

export default function AppContainer({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#F5F7FA",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
