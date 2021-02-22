// import axios
import axios from 'axios'

export default axios.create(
    {
        baseURL: 'https://api.unsplash.com',
        headers: {
            Authorization: 'Client-ID lirVF8_Cnq-wn0eVHfPGJXZkPyYLikQOgcBXlp-vhwA'
        }
    }
)
