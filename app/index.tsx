import { AppProvider } from "@/providers/app";
import AppContainer from "../components/AppContainer";
import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

import styles from "@/constants/styles";



export default function App() {

  return (

    <AppContainer>
      <Stack.Screen
        options={{
          title: 'Home',
          headerStyle: { backgroundColor: '#f8f8f8' },
          headerTintColor: '#333',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Text style={styles.title}>Planification d'événements</Text>
      <Text style={styles.subtitle}>
        Créez, gérez et votez pour vos événements préférés.
      </Text>

      <Text>Ouvrir l'application</Text>
      <Link href="/planify" style={styles.buttonLink}>Voir les événements</Link>
    </AppContainer>
  );
}
