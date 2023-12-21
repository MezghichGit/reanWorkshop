import {  StyleSheet} from 'react-native'
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabNavigator from './TabNavigator';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Register" component={SignUpScreen} />
        {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
        <Stack.Screen name="Home" component={TabNavigator} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#F8FEFE'    
    },
  });
export default Navigation
