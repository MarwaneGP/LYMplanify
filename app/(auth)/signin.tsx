import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import styles from "@/constants/styles";
import { Href, Link, useRouter, Stack } from 'expo-router';
import { supabase } from '@/utils/supabase';
import { useState } from 'react';
import { useSearchParams } from "expo-router/build/hooks";



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const params = useSearchParams();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      alert(error.message);
    }
    if (data?.user) {
      alert("Logged in successfully!");
      router.push((params.get("redirect") || "/") as Href);
    }
  }
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Sign In',
          headerStyle: { backgroundColor: '#f8f8f8' },
          headerTintColor: '#333',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to LYM Planify 🎉</Text>
        <Text style={styles.subtitle}>Plan and vote on events effortlessly with your team!</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <Link href="/signup" style={styles.buttonLink}>Sign up</Link>
      </View>
    </>
  );
}