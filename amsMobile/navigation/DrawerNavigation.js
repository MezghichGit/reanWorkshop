import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../component/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from './TabNavigator';
import ContactScreen from '../screens/ContactScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
          
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#07B0A8',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontSize: 15,
                },
            }}
            drawerContent={props => <CustomDrawer {...props} />}
            >
            <Drawer.Screen
                name="Accueil"
                component={TabNavigator}
                options={{
                    title: 'Accueil',
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Mes infos"
                component={ContactScreen}
                options={{
                    title: 'Me contacter',
                    drawerIcon: ({ color }) => (
                        <Ionicons name="call-outline" size={22} color={color} />
                    ),
                }}
            />

        </Drawer.Navigator>
    );
};
export default DrawerNavigation;
