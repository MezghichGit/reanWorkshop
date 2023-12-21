import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
const tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
    <tab.Navigator>
    <tab.Screen name="Home" component={HomeScreen} options={{ title: 'Providers' }}/>
    </tab.Navigator>
 
    );
    }
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    });
