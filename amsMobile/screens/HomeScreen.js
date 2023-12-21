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
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const [providers, setProviders] = useState([]);
    const fetchProviders = async () => {
        const u = await asyncStorage.getItem("token");
        axios.defaults.headers['Authorization'] = 'Bearer ' + u;
        const a = await asyncStorage.getItem("id");

        const res = await axios
            .get("https://ams.smart-it-partner.com/api/providers")
            .then(response => response.data["hydra:member"])
        setProviders(res);
        //console.log(res)
    }
    useEffect(() => {
        fetchProviders();
    }, []);

    const navigation = useNavigation();
    const addProvider = () => {
      //  console.log('Ajouter un provider');
      navigation.navigate('Add Provider')
    };
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
    },
})
export default HomeScreen;
