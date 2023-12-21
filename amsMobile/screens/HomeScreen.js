import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList, TouchableOpacity
} from 'react-native'

import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import Icon from 'react-native-vector-icons/FontAwesome'; // Exemple d'utilisation de FontAwesome
import { useNavigation } from '@react-navigation/native'
const HomeScreen = () => {
    const [providers, setProviders] = useState([]);
    const navigation = useNavigation();
    const fetchProviders = async () => {
        const u = await asyncStorage.getItem("token");
        axios.defaults.headers['Authorization'] = 'Bearer ' + u;
       // const a = await asyncStorage.getItem("id");

        const res = await axios
            .get("https://ams.smart-it-partner.com/api/providers")
            .then(response => response.data["hydra:member"])
        setProviders(res);
        console.log(res)
    }
    useEffect(() => {
        fetchProviders();
    }, []);
    const addProvider = () => {
        navigation.navigate('Add Provider');
    };
    const deleteProvider = async (idprovider) => {
        const u = await asyncStorage.getItem("token");
        axios.defaults.headers['Authorization'] = 'Bearer ' + u;
        await axios.delete("https://ams.smart-it-partner.com/api/providers/" + idprovider)
            .then(response => {
                response.data;
            })
        navigation.reset({
            index: 0,
            routes: [{ name: 'List Providers', params: { refresh: true } }],
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.addButton} onPress={addProvider}>
                <Icon name="plus" size={20} color="white" />
                <Text style={styles.addButtonText}>Add Provider</Text>
            </TouchableOpacity>
            <FlatList
                enableEmptySections={true}
                data={providers}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.box}>
                            <Image style={styles.image} source={{ uri: 'https://ams.smart-it-partner.com/uploads/provider/' + item.photo }} />
                            <View style={styles.boxContent}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.description}>{item.adress}</Text>
                                <Text style={styles.description}>{item.email}</Text>
                                <View style={styles.buttons}>
                                    <TouchableOpacity
                                        style={[styles.button, styles.view]}
                                        onPress={() => deleteProvider(item.id)}
                                    >
                                        <Image
                                            style={styles.icon}
                                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6861/6861362.png' }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                }}
            /></View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    box: {
        padding: 20,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    boxContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        color: '#151515',
    },
    description: {
        fontSize: 15,
        color: '#646464',
    },
    view: {
        backgroundColor: '#eee',
    },
    addButton: {
        backgroundColor: '#07B0A8',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10, // Marge en haut
        marginLeft: 200, // Marge à gauche
        marginRight: 10
    },
    addButtonText: {
        color: 'white',
        marginLeft: 10,
    }, imageContainer: {
        alignItems: 'center', marginLeft: 30,
        marginVertical: 10, width: '80%'
    },
    buttons: {
        flexDirection: 'row',

    },
    button: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 50,
        marginRight: 5,
        marginTop: 5,
    },
    icon: {
        width: 20,
        height: 20,
    },
    view: {
        backgroundColor: '#eee',
    },
})
export default HomeScreen;
