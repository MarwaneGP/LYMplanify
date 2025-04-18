import { AuthGuard } from "@/components/AuthGuard";
import { PropsWithChildren, useEffect } from "react";
import { supabase } from '@/utils/supabase';
import { Text, TouchableOpacity } from "react-native";
import { Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';



import styles from "@/constants/styles";


"marwane.ghalila@hotmail.com"

export default function ProtectedLayout() {

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert('Logout failed' + error.message);
    }
  };
  return (
    <AuthGuard>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarButton: HapticTab,

          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
      </Tabs>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText} >Log aout </Text>
      </TouchableOpacity>

    </AuthGuard >
  )
}
