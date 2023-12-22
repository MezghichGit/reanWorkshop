import React ,{useState,useEffect, useContext}from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import authtoken from '../service/authtoken';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

const CustomDrawer = props => {
  const navigation = useNavigation();

  const [nom, setNom] = useState('') ;
  const [prenom, setPrenom] = useState('') ;
  const [email, setEmail] = useState('') ;

  useEffect(() => {
      const getToken = async () => {
          //const token = await asyncStorage.getItem("nom");
          //const image = await asyncStorage.getItem("phpto");
          const email = await asyncStorage.getItem("email");
          const nom = await asyncStorage.getItem("nom");
          const preom = await asyncStorage.getItem("prenom");

          setEmail(email);
          setPrenom(preom)
          setNom(nom);
      }
      getToken();
  }, []);
 

  function logout() {
      authtoken.logout();
      navigation.navigate('Login');
  }
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
 
        contentContainerStyle={{backgroundColor: 'white'}}>
         <Image
               source={require('../assets/sip.png')}     
                    style={{height: 80, width: '55%', borderRadius: 0, marginLeft: 60,backgroundColor:'white',marginTop: 10,marginBottom:6}}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 12,   fontWeight: '600',
              marginBottom: 5,marginLeft:15
            }}>
          Bienvue {prenom} {nom}
          </Text>

          <Text
            style={{
              color: 'black',
              fontSize: 12,   fontWeight: '600',
              marginBottom: 5,marginLeft:15
            }}>
          {email}
          </Text>


        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
      
        <TouchableOpacity onPress={() => {logout()}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
            Déconnexion
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
