import axios from 'axios'

export default {
    apiClient: axios.create({
        baseURL: 'http://localhost:3001/api',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}