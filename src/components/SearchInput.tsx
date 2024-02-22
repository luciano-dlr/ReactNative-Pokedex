import React, { useEffect, useState } from 'react'
import { StyleProp, TextInput, ViewStyle } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    style?:StyleProp<ViewStyle>
    onDebounce: (value: string) => void
}

export const SearchInput = ({style,onDebounce}:Props) => {

    const [textValue, setTextValue] = useState('')

    const debouncedValue = useDebouncedValue( textValue )
    
    useEffect(() => {
      
        // console.log(debouncedValue);
        
        onDebounce(debouncedValue.debouncedValue)
    
    
    }, [debouncedValue.debouncedValue])
    

    return (
        <View style={{
            ...styles.container,
            ...style as any
            }}>
            <View style={styles.textBackground}>

                <TextInput
                    placeholder='Search Pokemon'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />

                <Icon
                    name='search-outline'
                    color='gray'
                    size={24} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
       
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 45,
        paddingHorizontal:20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        
    }

});
