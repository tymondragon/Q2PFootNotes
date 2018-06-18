
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function(table) {
    table.increments()
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.string('subject', 255).notNullable().defaultTo('')
    table.string('content', 255).notNullable().defaultTo('')
    table.string('video_link', 255).notNullable().defaultTo('')
    table.timestamps(true,true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes')
}
