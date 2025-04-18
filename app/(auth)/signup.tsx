import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "../../constants/styles";
import { Href, Link, Stack, useRouter } from "expo-router";
import { supabase } from "@/utils/supabase";
import { useState } from "react";
import { useSearchParams } from "expo-router/build/hooks";



export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const router = useRouter();
  const params = useSearchParams();
  const handleSignup = async () => {
    if (password !== passwordConfirm) {
      alert("Passwords do not match!");
      return;
    } else {
      console.log("Signup", email, password, passwordConfirm);
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,

      });
      console.log("Signup data", data);
      if (!error && !data?.user) {
        alert("Check your email for the confirmation link!");
      }
      if (error) {
        alert(error.message);
      }
      if (data?.user) {
        alert("Account created successfully!");
        router.push((params.get("redirect") || "/") as Href);
      }
    }
  }
  return (

    <>
      <Stack.Screen
        options={{
          title: 'Signup',
          headerStyle: { backgroundColor: '#f8f8f8' },
          headerTintColor: '#333',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Join LYM Planify 👋</Text>
        <Text style={styles.subtitle}>
          Create an account to start planning and voting on events with your crew!
        </Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#aaa"
          />

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

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            onChangeText={setPasswordConfirm}

          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText} >Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Link href="/signin" style={styles.buttonLink}>Sign in</Link>
      </View>
    </>
  );
}
