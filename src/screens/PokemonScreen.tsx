import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import Icon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';
import { TextInput } from 'react-native';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

export const PokemonScreen = ({ navigation, route }: Props) => {

  const { simplePokemon, color } = route.params
  const { name, picture, id } = simplePokemon
  const { top } = useSafeAreaInsets()
  const {isLoading,pokemon} = usePokemon(id)
  // console.log("🚀 ~ PokemonScreen ~ pokemon:", JSON.stringify(pokemon,null,4))

  const [isFocused, setIsFocused] = useState(false)



  // console.log("🚀 ~ PokemonScreen ~ name:", name)

  
  

  return (
    <View style={{flex:1}}>
       <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          style={{
            ...styles.backBtn,
            top: top + 10,
            backgroundColor:color,
            borderRadius:200,
            padding:2,
            borderWidth:2,
            borderColor:color
            
          }}
        >

          <Icon
            name='arrow-back-outline'
            color='white'
            size={30}
          />

        </TouchableOpacity>

      {/* Header Container */}
      <View style={{
        ...styles.headerContainer,
        backgroundColor: color,
      }}>
      
        {/* nombre Pokemon */}

        <Text style={{
          ...styles.pokemonName,
          top: top + 45
        }}

        >{name + '\n' }#{id}</Text>

        {/* pokebola blanca */}

        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={{...styles.pokeball}}
        />

        <FadeInImage
          uri={picture}
          style={styles.pokemonImage}
        />


      </View>

      {/* Detalles y loading */}
      {
        isLoading ? (

      <View style={styles.activityIndicator}>
        <ActivityIndicator
        color={color}
        size={50}
        />
      </View>

        ) 
        : <PokemonDetails pokemon={pokemon}/>


      }


      {/* <View>
      <TextInput
        style={[styles.input,isFocused && styles.inputFocused ]}
       
        placeholder="Soy Joita"
        
        keyboardType="numeric"

        onFocus={()=> {setIsFocused(true)}}

        onBlur={() => setIsFocused(false)}
        
      />
      </View> */}


    </View>
  )
}
  // console.log("🚀 ~ PokemonScreen ~ capitalLetter:", capitalLetter)

const styles = StyleSheet.create({

  input:{
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:5,
    opacity:0.8
    
  },

  inputFocused:{
    borderColor:'blue',
    backgroundColor:'red',
    opacity:1
    
    

  },

  headerContainer: {
    height: 370,
    // zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000
  },
  backBtn: {
    position: 'absolute',
    left: 20,
    zIndex: 999,

  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
    right:-100
  },
  pokemonImage: {
    width: 300,
    height: 300,
    position: 'absolute',
    bottom:-30,
    right:-1

  },
  activityIndicator:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

});


