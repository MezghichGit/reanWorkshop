import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import NewScreen from '../screens/NewScreen';
import ArticleScreen from '../screens/ArticleScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
const tab = createBottomTabNavigator();
export default function TabNavigator() {
    return (
    <tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name == "Home") { iconName = "home-outline"; }
        else if (route.name == "Articles") { iconName = "phone-portrait-sharp"; }
        else if (route.name == "News") { iconName = "newspaper-outline"; }
 
        return (
        <Ionicons
        name={iconName}
        color={color}
        size={size}
        />
        );
        },
        })}>
    <tab.Screen name="Home" component={HomeScreen} options={{ title: 'Providers' }}/>
    <tab.Screen name="Articles" component={ArticleScreen} options={{ title: 'Articles' }}/>
    <tab.Screen name="News" component={NewScreen} options={{ title: 'News' }}/>
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
