import Env from '@ioc:Adonis/Core/Env'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'

const URL = 'https://finnhub.io/api/v1/'

const STOCK_TYPE = 'Common Stock'

const API_KEY = Env.get('FINNHUB_API_KEY')

export default class FinnhubController {
  public async symbols({ request }: HttpContextContract) {
    const result = await axios.get(`${URL}search?q=${request.input('symbol')}&token=${API_KEY}`)
    return result.data.result.filter((stock) => stock.type === STOCK_TYPE)
  }
}
