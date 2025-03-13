import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import StartScreen from './screens/StartScreen';


const Stack = createNativeStackNavigator();


const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={StartScreen} options={{
                    headerShown: false, // Hide the header for this screen
                }}/>
        </Stack.Navigator>
    );
};

export default AuthStack;
