import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigation } from './Navigation';
import { SearchScreen } from '../screens/SearchScreen';
import { Platform, StatusBar } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor="transparent" translucent />

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#5856D6',
          
          
          tabBarLabelStyle: {
            marginBottom: (Platform.OS === 'ios') ? 0 : 5
          },
          tabBarStyle: {
            position:'absolute',
            backgroundColor:'rgba(255,255,255,0.8)',
            borderWidth: 0,
            elevation: 0,
            height:(Platform.OS === 'ios' ) ? 0 : 50
          }
          


        }}
        sceneContainerStyle={{
          backgroundColor:'white'


        }}

      >
        <Tab.Screen
          name="Home"
          component={Navigation}
          options={{
            tabBarLabel: 'Listado',
            tabBarIcon: ({ color }) => (
              <Icon
                name='grid-outline'
                color={color} 
                size={24} />
            )
          }}
        />
         
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Busqueda',
            tabBarIcon: ({ color }) => (
              <Icon
                name='search-outline'
                color={color} 
                size={24} />
            )
          }}
        />
      </Tab.Navigator>
    </>
  );
}