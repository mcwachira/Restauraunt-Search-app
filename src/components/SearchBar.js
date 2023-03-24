import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({searchTerm, onSearchTermChange,  onSearchSubmit}) => {



    return (
        <View style={styles.container}>
<Feather name="search" style={styles.iconStyle} color="black" />
<TextInput placeholder='Search' 
autoCapitalize='none'
autoCorrect={false}
style={styles.inputStyle}
value={searchTerm}
onChangeText={newText => onSearchTermChange(newText)}
onEndEditing={() => onSearchSubmit()}
/>
            </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        marginTop:15, 
        marginBottom:15,
        flexDirection:'row',
        alignItems:'center',
      height:50,
      borderRadius:5,
      marginHorizontal:15,
      backgroundColor: '#F0EEEE',

    },
    inputStyle:{
        flex:1,
        fontSize:20,
    },

    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:10,
    }
  });
  