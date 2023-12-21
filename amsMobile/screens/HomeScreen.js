import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList
} from 'react-native'
import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

const HomeScreen = () => {
    const [providers, setProviders] = useState([]);


    const fetchProviders = async () => {
        const u = await asyncStorage.getItem("token");
        axios.defaults.headers['Authorization'] = 'Bearer ' + u;
        //const a = await asyncStorage.getItem("id");
        const res = await axios
            .get("https://ams.smart-it-partner.com/api/providers")
            .then(response => response.data["hydra:member"])
        setProviders(res);
       // console.log(res)
    }
    useEffect(() => {
        fetchProviders();
    }, []);
    return (
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
        />
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
})
export default HomeScreen;
