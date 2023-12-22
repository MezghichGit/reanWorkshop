import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from "react-native-vector-icons/Ionicons";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

const AddProviderScreen = () => {
    const [name, setName] = useState("");
    const [adress, setAdress] = useState("");
    const [email, setEmail] = useState("");
    const navigation = useNavigation();

    const [pickedImagePath, setPickedImagePath] = useState('');

    const showImagePicker = async () => {
        // Ask the user for the permission to access the media library
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your photos!");
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.didCancel) {
            setPickedImagePath(result.uri);
        } else {
            console.log('Sélection d\'image annulée');
        }

    }

    // This function is triggered when the "Open camera" button pressed
    const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your camera!");
            return;
        }
        const result = await ImagePicker.launchCameraAsync();
        if (!result.didCancel) {
            setPickedImagePath(result.uri);

        }
    }

    const selectedImage = pickedImagePath;

    const addProvider = async () => {

        let localUri = selectedImage;

        // localUri = "img.png";
        //const a = await asyncStorage.getItem("id");
        let filename = localUri ? localUri.split('/').pop() : '';
        let match = /\.(\w+)$/.exec(filename);
        let imageType = match ? `image/${match[1]}` : `image`;

        const formData = new FormData();
        if (localUri) {
           
            formData.append('image', { uri: localUri, name: filename, type: imageType });
            console.log("Image Name : "+filename);
            console.log("Image type: "+imageType);
            
        }
        formData.append('adress', adress);
        formData.append('name', name);
        formData.append('email', email);
        try {
            const response = await axios.post("https://ams.smart-it-partner.com/addprovider/mobile", formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            navigation.reset({
                index: 0,
                routes: [{ name: 'List Providers', params: { refresh: true } }],
            });
        } catch (error) {
            Alert.alert('Erreur', 'Une erreur est survenue lors de l\'ajout du publication', error);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {
                pickedImagePath !== '' && <Image source={{ uri: pickedImagePath }} style={styles.image} />
                }
            </View>
            <ScrollView style={styles.form}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.label}>Image</Text>
                    <TouchableOpacity style={styles.uploadButton} onPress={showImagePicker}>
                        <Ionicons
                            name="image"
                            size={30}
                            color="#149750"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
                        <Ionicons
                            name="camera"
                            size={30}
                            color="#165FAD"
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Name"
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>Adress</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Adress"
                    value={adress}
                    onChangeText={setAdress}
                />
                <TouchableOpacity style={styles.button} onPress={() => addProvider()}>
                    <Text style={styles.buttonText}>Valider</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    form: {
        width: '80%',
    },
    label: {
        marginTop: 20,
        marginBottom: 5
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#07B0A8',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    uploadButton: {
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 0,
        borderRadius: 15,
        backgroundColor: '#e7e7e7',
    },
    cameraButton: {
        backgroundColor: 'white',
        padding: 10,
        marginRight: 50,
        borderRadius: 15,
        backgroundColor: '#e7e7e7',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5, marginTop: 10,
    },
    imageContainer: {
        alignItems: 'center',
        marginLeft: 10,
        marginVertical: 10,
        width: '50%'
    },
    image: {
        width: '100%',
        height: 120,
    },
});
export default AddProviderScreen;
