
exports.up = async knex => {
    await knex.schema.createTable("user", table => {
        table.increments().primary()
        table.string("email")
    })

    await knex.schema.createTable("site", table => {
        table.increments().primary()
        table.integer("user_id").references("id").inTable("user").onDelete('CASCADE')
        table.string("from_user")
        table.string("url")
        table.boolean("read")
    })

    await knex.schema.createTable("highlight", table => {
        table.increments().primary()
        table.integer("site_id").references("id").inTable("site").onDelete('CASCADE')
        table.string("parentTag")
        table.string("text")
    })

};

exports.down = async knex => {
    await knex.schema.dropTableIfExists('highlight') 
    await knex.schema.dropTableIfExists('site') 
    await knex.schema.dropTableIfExists('user') 

};
