import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import styles from '../../../constants/styles';


export default function Home() {
  return (
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
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

