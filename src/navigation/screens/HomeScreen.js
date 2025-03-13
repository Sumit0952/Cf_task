import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, TouchableOpacity, Animated, PanResponder } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const API_URL = 'https://random-data-api.com/api/users/random_user?size=80';

const HomeScreen = () => {
    const [users, setUsers] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
                fadeIn();
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const handleSwipe = (_, gestureState) => {
        if (gestureState.dx > 50 && index > 0) {
            // Swipe right (previous user)
            setIndex(prevIndex => prevIndex - 1);
        } else if (gestureState.dx < -50 && index < users.length - 1) {
            // Swipe left (next user)
            setIndex(prevIndex => prevIndex + 1);
        }
    };

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderRelease: handleSwipe,
    });

    if (loading) {
        return <ActivityIndicator size="large" style={styles.loader} color="#fff" />;
    }

    const user = users[index];

    return (
        <LinearGradient colors={["#1c1c1c", "#4a4a4a"]} style={styles.container}>
            <Animated.View style={[styles.card, { opacity: fadeAnim }]} {...panResponder.panHandlers}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
                <Text style={styles.username}>@{user.username}</Text>
                <Text style={styles.email}>{user.email}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => setIndex(index - 1)} disabled={index === 0} style={[styles.button, index === 0 && styles.disabledButton]}>
                        <Text style={styles.buttonText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIndex(index + 1)} disabled={index === users.length - 1} style={[styles.button, index === users.length - 1 && styles.disabledButton]}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#2c2c2c',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
        borderWidth: 3,
        borderColor: '#fff',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    username: {
        fontSize: 18,
        color: '#bbb',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: '#ddd',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#ff4757',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    disabledButton: {
        backgroundColor: '#555',
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;