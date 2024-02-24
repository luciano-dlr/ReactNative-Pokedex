import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Navigation, RootStackParams } from './Navigation';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { TabSearchScreens } from './TabSearch';


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
            tabBarLabel: 'List',
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
          component={TabSearchScreens}
          options={{
            tabBarLabel: 'Search',
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