import React, {useState, useEffect} from 'react'
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList';



const SearchScreen = () => {
    const [searchTerm, setSearchTerm] =  useState("")
 const [searchApi, results, errorMessage] =  useResults()



 const filterByPrice = (price) =>{
  return results.filter((result) => {
    return result.price === price
  })
 }
    return (
        <>
<SearchBar searchTerm={searchTerm}
 onSearchTermChange={newSearchTerm => setSearchTerm(newSearchTerm)}
 onSearchSubmit ={() => searchApi()} />


{errorMessage&& <Text> {errorMessage} </Text>}


<ScrollView>

<ResultList results={filterByPrice("$")}  title='Cose Effective'/>
<ResultList results={filterByPrice("$$")} title='Bit Pricier'/>
<ResultList results={filterByPrice("$$$")} title='Bit Spender'/>
</ScrollView>



            </>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
 
    },
  });
  