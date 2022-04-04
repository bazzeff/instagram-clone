import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  UserDataScreen,
} from './src/screens'  
import AuthNavigation from './AuthNavigation'

const Stack = createStackNavigator()

export default function App() {


  return <AuthNavigation />
}