import axios from 'axios'
import {REACT_NATIVE_API} from 'react-native-dotenv'

export default  axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${REACT_NATIVE_API}`
      }
})