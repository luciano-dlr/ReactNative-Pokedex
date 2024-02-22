import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { PokemonFull, Ability } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}




export const PokemonDetails = ({ pokemon }: Props) => {
    
   
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject
            }}
        >

            <View style={{
                ...styles.container,
                marginTop: 370
            }}>
                <Text style={styles.title}>Types</Text>

                <View style={{ flexDirection: 'row' }}>

                    {
                        pokemon.types.map(({ type }) => (

                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={type.name}
                            >
                                {type.name}

                            </Text>

                        ))
                    }

                </View>

                

                {/* peso */}
                <Text style={styles.title}>Peso</Text>
                <Text style={styles.regularText}>{pokemon.weight}kg</Text>

            </View>

            {/* types */}
            <View style={styles.container}>
                <Text style={styles.title}>Sprites</Text>

            </View>

            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            
            //style
            >
                <FadeInImage
                uri={pokemon.sprites.front_default}
                style={styles.basicSprite}
                />
                <FadeInImage
                uri={pokemon.sprites.back_default}
                style={styles.basicSprite}
                />
                <FadeInImage
                uri={pokemon.sprites.front_shiny}
                style={styles.basicSprite}
                />
                <FadeInImage
                uri={pokemon.sprites.back_shiny}
                style={styles.basicSprite}
                />

            </ScrollView>

            {/* habilidades base */}
            <View style={styles.container}>
                <Text style={styles.title}>Habilidades Base</Text>

                <View style={{ flexDirection: 'row' }}>

                    {
                        pokemon.abilities.map(({ ability }) => (

                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={ability.name}
                            >
                                {ability.name}

                            </Text>

                        ))
                    }

                </View>
    
            </View>

            {/* todos los movimientos */}
            <View style={styles.container}>
                <Text style={styles.title}>Movimientos</Text>

                <View style={{ flexDirection:'row',flexWrap:'wrap'}} >

                    {
                        pokemon.moves.map(({ move }) => (

                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={move.name}
                            >
                                {move.name}
                                
                              

                            </Text>

                        ))
                    }

                </View>
    
            </View>

            {/* stats */}
              <View style={styles.container}>
                <Text style={styles.title}>Stats Base</Text>

                <View  >

                    {
                        pokemon.stats.map(( stat, idice ) => (

                           <View 
                           key={stat.stat.name + idice}
                           style={{flexDirection:'row'}}
                           >
                             <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                    width:150
                                }}
                                key={stat.stat.name}
                            >
                                {stat.stat.name}
                                
                              

                            </Text>
                             <Text
                                style={{
                                    ...styles.regularText,
                                    fontWeight:'bold'
                                }}
                                
                            >
                                {stat.base_stat}
                                
                              

                            </Text>
                            
                           </View>

                        ))
                    }

                </View>

            {/* sprite Final */}

            <View style={{
                marginBottom:20,
                alignItems:'center'
            }}>

            <FadeInImage
                uri={pokemon.sprites.front_default}
                style={styles.basicSprite}
                />
            </View>

            </View>





        </ScrollView>
    )
}


const styles = StyleSheet.create({

    container: {
        marginHorizontal: 20,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    regularText: {
        fontSize: 17,
        marginVertical: 5
    },
    basicSprite:{
        width:150,
        height:150
    }
});

