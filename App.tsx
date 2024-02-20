import 'react-native-gesture-handler'; 
import React from 'react'
import { Text, View } from 'react-native'
import { Navigation } from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}


