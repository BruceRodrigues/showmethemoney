import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Stocks extends BaseSchema {
  protected tableName = 'stocks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('symbol').notNullable()
      table.string('name').notNullable()
      table.integer('amount').notNullable()
      table.double('price').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
