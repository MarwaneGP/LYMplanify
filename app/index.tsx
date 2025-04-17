import { AppProvider } from "@/providers/app";
import AppContainer from "../components/AppContainer";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function App() {
  return (
    
      <AppContainer>
        <Text>Ouvrir l'application</Text>
        <Link href="/aaaaaaaaaah">Voir les événements</Link>
      </AppContainer>
  );
}
