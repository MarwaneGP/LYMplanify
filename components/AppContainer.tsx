import { View, Text, StyleSheet } from 'react-native';

export default function AppContainer({ childElement }: { childElement: React.ReactNode }) {
  return (
    <View style={styles.container}>
      {childElement}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'red',
  },
});
