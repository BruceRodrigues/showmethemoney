import axios from 'axios'
import { isStaging } from './environment'

export const api = axios.create({
    baseURL: `http://${isStaging() ? '18.230.76.34' : 'server'}:3333/api/`,
})
