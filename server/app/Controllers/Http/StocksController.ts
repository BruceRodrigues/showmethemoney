import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Stock from 'App/Models/Stock'

export default class StocksController {
  public async index() {
    return await Stock.all()
  }

  public async save({ request }: HttpContextContract) {
    const stock = new Stock()
    const body = request.post()
    await stock.fill(body).save()
  }

  public async get({ params }: HttpContextContract) {
    return await Stock.find(params.id)
  }

  public async edit({ request }: HttpContextContract) {
    const data = request.post()
    return await Stock.updateOrCreate({ id: data.id }, { ...data })
  }
}
