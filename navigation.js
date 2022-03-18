import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';


const Stack = createStackNavigator();

const screenOption = {
    //
    headerShown: false,
}

const navigation = () => {
  <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' screenOption={screenOption}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} /> 
      <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
    </Stack.Navigator>
  </NavigationContainer>
}

export default navigation

const styles = StyleSheet.create({})