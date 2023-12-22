import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function ContactScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.titreText}>Mes infos de contact</Text>
            <Image
                style={styles.logo}
                source={{
                    uri: 'https://cours-informatique-gratuit.fr/wp-content/uploads/2017/10/avatar.png',
                }} />
            <Text>Mohamed Amine MEZGHICH</Text>
            <Text>amine.mezghich@gmail.com</Text>
            <Text>Téléphone : 33 (0)1 43 34 90 94</Text>
            <Text>Adresse : Paris LEVALLOIS-PERRET</Text>


            <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
                <View
                    style={{
                        margin: 10,
                        backgroundColor: '#07B0A8',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                        paddingVertical: 10,
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20
                        }}>Retour à l'accueil </Text>
                </View>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titreText: {
        fontSize: 20
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
    logo: {
        height: 300,
        width: 300,
        margin: 'auto'
    },
    txtStyle1: {
        backgroundColor: "blue",
        flex: 0.3
    },
    txtStyle2: {
        backgroundColor: "red",
        flex: 0.5
    },
    logo: {
        width: 66,
        height: 58,
    },
});
