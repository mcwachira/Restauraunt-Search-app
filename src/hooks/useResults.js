import {useState, useEffect} from 'react'
import yelp from '../api/yelp'



export default () => {
    const [errorMessage, setErrorMessage] = useState("")

    const [results, setResults] =  useState([])

    console.log(results)
    
    const searchApi = async(initialSearchTerm) => {

        try {
            const response = await yelp.get('/search', {
                params:{
                    limit:50,
                    term:initialSearchTerm,
                    location:'san jose'
    
                }
            })
            setResults(response.data.businesses)
        } catch (error) {
            console.log(error)
            setErrorMessage("something went  wrong")
        }
     
    }

    console.log(results)

    useEffect(() => {

        searchApi('pasta')
    }, [])


    return [searchApi, results, errorMessage]

}