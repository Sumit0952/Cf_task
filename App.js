import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { StyleSheet } from 'react-native';
import {  AuthProvider } from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>
  );
};

export default App

const styles = StyleSheet.create({})