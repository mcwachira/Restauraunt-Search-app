import { StyleSheet, Text, View, FlatList , Image} from 'react-native'
import React, {useEffect, useState } from 'react'
import yelp from '../api/yelp'

const ResultShowScreen = ({navigation, route}) => {

    const [result, setResult] = useState(null)
    const {id} = route.params

    console.log(id)
 const fetchResults = async(id) => {
    try{
        const response = await yelp.get(`/${id}`)
        console.log(response.data.photos)

      setResult(response.data)
    }catch(error){

        console.log(error)
    }

 }

 useEffect(() => {
    fetchResults(id)
 }, [])

 console.log(result)
 if(!result){
    return null
 }
  return (
    <View>
        <Text>{result.name}</Text>
      <FlatList
      data={result.photos}
      keyExtractor={(photo) =>photo}
      renderItem={({item}) => {
        return(
<Image style={styles.Image} source={{uri:item}}/>
   
        )
    }
        
    }
      />
    </View>
  )
}

export default ResultShowScreen

const styles = StyleSheet.create({

    Image:{
        height:200,
        width:200,
    }
})