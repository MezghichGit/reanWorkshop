import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Button, TouchableOpacity
} from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import NewScreen from '../screens/NewScreen';
import ArticleScreen from '../screens/ArticleScreen';
import addProviderScreen from '../screens/AddProviderScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import authtoken from '../service/authtoken';
const tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="List Providers" component={HomeScreen} options={{

            headerShown: false
        }} />
        <Stack.Screen
            name="Add Provider"
            component={addProviderScreen}
            options={({ route }) => ({
                title: route.params?.title,
                headerStyle: {
                    backgroundColor: '#DFF8F7',
                }

            })}
        />
       
    </Stack.Navigator>
);
export default function TabNavigator() {
    const navigation=useNavigation();
    const openDrawer = () => {
      navigation.openDrawer()
    };
    const OpenDrawer = () => (
      <TouchableOpacity onPress={openDrawer} style={{ marginRight: 10 }}>
        <AntDesign name="bars" size={25} color="#000" />
      </TouchableOpacity>
    );
   
      return (
  
      <tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name == "Providers") { iconName = "home-outline"; }
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
      <tab.Screen name="Providers" component={HomeStack}   options={{
      title: 'Providers',
      headerRight: () => <OpenDrawer />
    }}/>
      <tab.Screen name="Articles" component={ArticleScreen} options={{
      title: 'Articles',
      headerRight: () => <OpenDrawer />
    }}/>
      <tab.Screen name="News" component={NewScreen} options={{
      title: 'News',
      headerRight: () => <OpenDrawer />
    }}/>
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
  
