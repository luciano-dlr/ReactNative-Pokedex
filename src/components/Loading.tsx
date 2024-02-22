import React from 'react';
import { StyleSheet } from 'react-native';
import { Text,View,ActivityIndicator } from 'react-native';

export const Loading = () => {
  return (
    <View style={stylesLocal.activityContainer}>
    <ActivityIndicator size={60} color='blue'/>

    <Text style={{paddingTop:40}}>
      Loading...
    </Text>

  </View>
  )
}


const stylesLocal = StyleSheet.create({

    activityContainer: {
      flex: 1,
  
      justifyContent: 'center',
      alignItems: 'center'
    },
  
  });