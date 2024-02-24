import React, { useRef } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useState, useEffect } from 'react';

import ImageColors from "react-native-image-colors";
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';




const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon,

}


export const PokemonCard = ({ pokemon }: Props) => {


    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()


    const [bgColor, setBgColor] = useState('grey');
    const isMounted = useRef(true)

    useEffect(() => {

        ImageColors.getColors(pokemon.picture, { fallback: 'gray' })
            .then(colors => {

                if(!isMounted.current)return ;

                (colors.platform === 'android')
                    ? setBgColor(colors.dominant || 'grey')
                    : setBgColor('grey')


            })

        return () => {
            isMounted.current = false
        }


    }, []);


    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=> navigation.navigate('PokemonScreen',{
                simplePokemon:{...pokemon,name:pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)},
                color: bgColor
            }) }
            >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor
            }}> 
                <View style={{width:'100%',padding:10}}>

                    <Text 
                    style={styles.name} 
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    >
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                      
                    </Text>
                    <Text 
                    style={styles.name} 
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    >
                       
                        #{pokemon.id}
                    </Text>

                </View>

                <View style={styles.pokebolaContanier}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />

                </View>



                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />


            </View>
        </TouchableOpacity>
    )
}
   

const styles = StyleSheet.create({

    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    pokebolaContanier: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5


    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -15,
        bottom: -22,
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        bottom: -10,
        right: -8,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        // top: 20,
        // left: 20,
        
    },

});


