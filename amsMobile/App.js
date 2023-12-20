import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import SignInScreen from './screens/SignInScreen';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignInScreen/>  
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

