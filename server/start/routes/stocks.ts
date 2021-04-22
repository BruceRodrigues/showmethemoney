import Route from '@ioc:Adonis/Core/Route'

Route.get('/api/stocks', 'StocksController.index')
Route.get('/api/stocks/:id', 'StocksController.get')
Route.put('/api/stocks/:id', 'StocksController.edit')
Route.post('/api/stocks', 'StocksController.save')
