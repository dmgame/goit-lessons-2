import axios from 'axios'

const instance  = axios.create({
    baseURL: 'http://localhost:9999/api'
})

export default instance