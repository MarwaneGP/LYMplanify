import { View, TextInput } from 'react-native';
import { AppProvider } from './context';
export default function TextGetter() {

  return (
    <AppProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%' }}
          placeholder="Type here..."
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginTop: 20 }}
          placeholder="Type here..."
        />
      </View>
    </AppProvider>
  );
}