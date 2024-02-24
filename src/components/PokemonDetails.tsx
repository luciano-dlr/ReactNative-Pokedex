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
                ...StyleSheet.absoluteFillObject,

            }}
        >


            <View style={{
                ...styles.container,
                marginTop: 450, backgroundColor: 'white'
            }}>
                <Text style={{ ...styles.title, backgroundColor: 'white' }}>Types</Text>

                <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>

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
                <Text style={styles.title}>Weight</Text>
                <Text style={styles.regularText}>{pokemon.weight}kg</Text>

                <Text style={styles.title}>Height</Text>
                <Text style={styles.regularText}>{pokemon.height / 10} m</Text>

                <Text style={styles.title}>Base Experience</Text>
                <Text style={styles.regularText}>{pokemon.base_experience} xp</Text>

                {/* types */}
                
                <Text style={{...styles.title,paddingTop:20}}>Common / Shiny</Text>

                
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ backgroundColor: 'white' }}

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

                {/* stats base */}
                <Text style={styles.title}>Base Stats</Text>

                <View  >

                    {
                        pokemon.stats.map((stat, idice) => (

                            <View
                                key={stat.stat.name + idice}
                                style={{ flexDirection: 'row' }}
                            >
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150
                                    }}
                                    key={stat.stat.name}
                                >
                                    {stat.stat.name}



                                </Text>
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        fontWeight: 'bold'
                                    }}

                                >
                                    {stat.base_stat}



                                </Text>

                            </View>

                        ))
                    }

                </View>


                {/* Version Group */}

            </View>



            {/* habilidades base */}
            <View style={{ ...styles.container, backgroundColor: 'white' }}>
                <Text style={{ ...styles.title, backgroundColor: 'white' }}>Base Skills</Text>

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
            <View style={{ ...styles.container, backgroundColor: 'white' }}>
                <Text style={styles.title}>Movements</Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} >

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
            <View style={{ ...styles.container, backgroundColor: 'white' }}>
            
                {/* New */}
                <View style={{ ...styles.container, backgroundColor: 'white' }}>
                  



                    {/* sprite Final */}

                    <View style={{
                        marginBottom: 50,
                        alignItems: 'center'
                    }}>

                        <FadeInImage
                            uri={pokemon.sprites.front_default}
                            style={styles.basicSprite}
                        />
                    </View>

                </View>

            </View>





        </ScrollView>
    )
}


const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 20,
        paddingTop: 20,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    regularText: {
        fontSize: 17,
        marginVertical: 5,
        color: 'black'
    },
    basicSprite: {
        width: 200,
        height: 200
    }
});

