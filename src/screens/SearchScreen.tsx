import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SearchInput } from '../components/SearchInput'
import { usePokemonSearch } from '../hooks/usePokemonSearch'
import { styles } from '../theme/appTheme';
import { PokemonCard } from '../components/PokemonCard'
import { Loading } from '../components/Loading'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'


const screenWidth = Dimensions.get('window').width



export const SearchScreen = () => {

  const { top } = useSafeAreaInsets()
  const {isFetching,simplePokemonList} =usePokemonSearch()
  
  const [pokemonsFiltered, setPokemonsFiltered] = useState<SimplePokemon[]>([])
  
  const [term, setTerm] = useState('')

  useEffect(() => {

    if(term.length === 0 ){
      return setPokemonsFiltered([])
      
    }


    if (isNaN(Number(term))) {

      setPokemonsFiltered(
        simplePokemonList.filter(
          (poke) => poke.name.toLowerCase().includes(term.toLowerCase())
        )
      )
    } else {
      const pokemonById = simplePokemonList.find(poke=> poke.id === term)!

      setPokemonsFiltered(
        (pokemonById) ? [pokemonById] : []
      )

    }




  
  }, [term])
  




  if(isFetching){
    return <Loading/>
  }

  return (
    <View style={{
      flex: 1,
      marginHorizontal: 20
    }}>

      <SearchInput 
      onDebounce={(value)=> setTerm(value) }
      
      style={{
        position:'absolute',
        zIndex:999,
        width:screenWidth -40,
        
        top:(Platform.OS === 'ios') ? top:top + 10,
      }}/>

      <FlatList
          data={pokemonsFiltered}
          keyExtractor={(pokemon)=> pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          
          //header
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              paddingTop: 10,
              marginTop:(Platform.OS === 'ios') ? top + 80 :top + 50
              
            }}>{term}</Text>
          )}

          //Render
          renderItem={({item}) => (
            <PokemonCard pokemon={item}/>
          )}
          

       
        />

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