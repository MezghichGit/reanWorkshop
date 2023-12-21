import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import Moment from 'moment';
const NewScreen = () => {
    const [news, setNews] = useState([]);
    const fetchNews = async () => {
        const u = await asyncStorage.getItem("token");
        axios.defaults.headers['Authorization'] = 'Bearer ' + u;
        //const a = await asyncStorage.getItem("id");

        const res = await axios
            .get("https://ams.smart-it-partner.com/api/news")
            .then(response => response.data["hydra:member"])
        setNews(res);

    }
    useEffect(() => {
        fetchNews();
    }, []);
    return (
        <ScrollView>
            {news.map(post => (
                <TouchableOpacity key={post.id} style={styles.post}>
                    <Image source={{ uri: 'https://ams.smart-it-partner.com/uploads/news/' + post.image }} style={styles.postImage} />
                    <View style={styles.postContent}>
                        <Text style={styles.postTitle}>{post.titre}</Text>
                        <Text style={styles.postMeta}>
                            {Moment(post.date).format('DD-MM-YYYY')}
                        </Text>
                        <Text style={styles.postExcerpt}>{post.description}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    post: {
        marginBottom: 20,
    },
    postImage: {
        width: '100%',
        height: 200,
    },
    postContent: {
        padding: 20,
    },
    postTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    postMeta: {
        fontSize: 14,
        color: '#999',
        marginBottom: 10,
    },
    postExcerpt: {
        fontSize: 14,
    },
});

export default NewScreen;
