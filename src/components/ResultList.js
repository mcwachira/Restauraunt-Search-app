import { StyleSheet, Text, View,FlatList , TouchableOpacity} from 'react-native'
import ResultsDetail from './ResultsDetail'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const ResultList = ({title, results}) => {

    const navigation= useNavigation()


    if(!results.length){
        return null
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

<FlatList
horizontal={true}
showsHorizontalScrollIndicator={false}
    data={results}
    keyExtractor={(result) => result.id}
    renderItem={({item}) => {
        return(
<TouchableOpacity onPress={() => navigation.navigate('ResultShow', {id:item.id})}> 
<ResultsDetail result={item}/>
</TouchableOpacity>
   
        )
    }
        
    }
    
/>


    </View>
  )
}

export default  ResultList

const styles = StyleSheet.create({

    container:{
        marginBottom:15
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginLeft:5
    }
})