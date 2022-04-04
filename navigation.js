import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/Home/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import NewPostScreen from './src/screens/NewPostScreen/NewPostScreen';


const Stack = createStackNavigator();

const screenOption = {
    //
    headerShown: false,
}

export const SignInStack = () => {
  <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOption={screenOption}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}

export const SignOutStack = () => {
  <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' screenOption={screenOption}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> 
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} /> 
    </Stack.Navigator>
  </NavigationContainer>
} 

const styles = StyleSheet.create({})