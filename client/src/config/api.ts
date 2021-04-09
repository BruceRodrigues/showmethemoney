import axios from 'axios'

export const api = axios.create({
    url: 'http://server:3333/api/',
})
