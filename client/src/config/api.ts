import axios from 'axios'
import { isLocal } from './environment'

export const api = axios.create({
    baseURL: `http://${isLocal() ? 'server' : '18.230.76.34'}:3333/api/`,
})
