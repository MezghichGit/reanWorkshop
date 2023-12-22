import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native';
import Navigation from './navigation';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Navigation />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F8FEFE'
  },
});


