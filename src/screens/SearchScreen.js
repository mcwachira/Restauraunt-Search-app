import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar'



const SearchScreen = () => {
    const [searchTerm, setSearchTerm] =  useState("")

    return (
        <View style={styles.container}>
<SearchBar searchTerm={searchTerm}
 onSearchTermChange={newSearchTerm => setSearchTerm(newSearchTerm)}
 onSearchSubmit ={() => console.log('search submitted')} />

<Text>
{searchTerm}
</Text>

            </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
 
    },
  });
  