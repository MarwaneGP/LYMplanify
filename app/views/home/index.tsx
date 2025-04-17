import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import Signup from './signup';
import Login from './login';
import Loading from '@/components/Loading';
import styles from '../../../constants/styles';
import { useAuth } from '@/hooks/useAuth';



export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  const navigate: any () => {
    router.push('/home/dashboard')
  }
  return (
    <View style={styles.container}>
      {
        user === null && <Loading />
      }
      {
        user === false && <Login />
      }
      {
        user && router.push('/home/dashboard')
      }
    </View>
  );
}

