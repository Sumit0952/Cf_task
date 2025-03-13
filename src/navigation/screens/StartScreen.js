import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthContext';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'; // For gradient background

const StartScreen = () => {
    const navigation = useNavigation();
    const { setIsLoggedIn } = useContext(AuthContext);

    const handleRegister = () => {
        setIsLoggedIn(true);
        navigation.navigate('Home');
    };

    return (
        <LinearGradient
            colors={['#1c1c1c', '#4a4a4a']} // Same gradient as HomeScreen
            style={styles.container}
        >
            <View style={styles.content}>
                <Text style={styles.text}>Move on to Profiles</Text>
                <TouchableOpacity onPress={handleRegister}>
                <Image
                    source={require('../../../asset/img/arrow.png')} // Add an arrow image in your assets folder
                    style={styles.arrow}
                    
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default StartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    arrow: {
        width: 50,
        height: 50,
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#ff4757', // A different color for the button
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});