import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
const SignInScreen = props => {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("");
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ backgroundColor: '#ffffff', }}>
                    <View
                        style={{
                            backgroundColor: '#DFF8F7', padding: 50,
                            borderBottomLeftRadius: 60
                        }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center', marginTop: 100
                            }}>
                            <Image
                                style={{
                                    width: '100%', height: 160
                                }}
                                source={require('../assets/sip.png')} />
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#DFF8F7', }}>
                    <View style={{
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                        paddingHorizontal: 30,
                        borderTopRightRadius: 60
                    }}>
                        <View style={styles.spacing_big}></View>
                        <View style={styles.label}>
                            <Text style={styles.label}>Email</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            setValue={setUsername}
                            onChangeText={setUsername}
                            value={username}
                        />
                        <View style={styles.spacing}></View>
                        <View style={styles.label}>
                            <Text style={styles.label}>Mot de passe</Text>
                        </View>
                        <View style={styles.passwordInputContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>
                        <View style={styles.spacing}></View>
                        <TouchableOpacity >
                            <View
                                style={{
                                    margin: 10,
                                    backgroundColor: '#07B0A8',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 100,
                                    paddingVertical: 10,
                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 20
                                    }}>Connexion </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Text style={styles.text}>© 2023 Smart It Partner - Tous droits réservés</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'white',
        backgroundColor: '#e7e7e7',
        paddingHorizontal: 10,
        borderRadius: 100,
    },
    passwordInput: {
        flex: 1,
        height: 40,
    },
    spacing: {
        margin: 10
    },
    spacing_big: {
        margin: 10
    },
    label: {
        fontWeight: '300',
        paddingLeft: 5,
        fontSize: 17,
        color: '#999',
    },
    input: {
        height: 40,
        margin: 5,
        borderRadius: 100,
        backgroundColor: '#e7e7e7',
        padding: 10,
    },
    imagecontainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image_logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 7,
        elevation: 5,
        marginTop: 100,
    },
    footer: {
        backgroundColor: 'white',
        paddingVertical: 10,
        alignItems: 'center',
    },
    text: {
        color: 'gray',
        fontSize: 14,
    },
});
export default SignInScreen;
