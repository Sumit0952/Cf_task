import React, { useContext } from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../../AuthContext';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {isLoggedIn ? <MainStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default StackNavigator;
