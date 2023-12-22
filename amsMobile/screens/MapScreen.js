import React, { useState ,useEffect} from 'react';
import { View, Text, Image, Modal, StyleSheet, TouchableOpacity,Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute, useNavigation } from '@react-navigation/native';
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import axios from "axios";
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

const MapScreen = () => {
    const route = useRoute();

  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude ]= useState('');
  const [image, setImage] = useState('');


  const idprovider=route.params?.id;

  const  getDataProvider= async () => {

    const u=  await asyncStorage.getItem("token");
    axios.defaults.headers['Authorization'] = 'Bearer '  + u;

    const responses = await axios
        .get("https://ams.smart-it-partner.com/api/providers/"+idprovider)
        .then(response=>response.data)
        setNom(responses.name)
        setEmail(responses.email)
        setLatitude(parseFloat(responses.latitude));
        setLongitude(parseFloat(responses.longitude));
        setImage(responses.photo)
        console.log(responses.latitude)
}


    const description = email;
    const imageUrl = 'https://ams.smart-it-partner.com/uploads/provider/'+image;
    useEffect( () => {
    getDataProvider();

  }, []);

  

    const openGoogleMapsDirections = async (destinationLat, destinationLon) => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
        }

        const location = await Location.getCurrentPositionAsync({});
        const originLat = location.coords.latitude;
        const originLon = location.coords.longitude;

        const url = `https://www.google.com/maps/dir/?api=1&origin=${originLat},${originLon}&destination=${destinationLat},${destinationLon}`;
        Linking.openURL(url).catch(err => console.error("Couldn't open Google Maps", err));
    };
    const mapHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Simple Map with Marker, Popup and Image</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        <style>
          #map { height: 100vh; width: 100%; }
          .leaflet-popup-content { width: auto !important; }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var map = L.map('map').setView([${latitude}, ${longitude}], 13);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);
         
          var marker = L.marker([${latitude}, ${longitude}]).addTo(map);
          marker.bindPopup('<div><b>${nom}</b><br><img src="${imageUrl}" alt="image" style="width:100px;"><br>${description}</div>').openPopup();
        </script>
      </body>
    </html>
  `;
    return (
        <View style={styles.container}>
            <WebView
                originWhitelist={['*']}
                source={{ html: mapHTML }}
                style={{ flex: 1 }}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => openGoogleMapsDirections(latitude, longitude)}>
                <Text style={styles.buttonText}>Voir l'itinéraire</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        margin: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default MapScreen;
