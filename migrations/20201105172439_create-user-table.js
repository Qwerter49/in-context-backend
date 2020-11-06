
exports.up = async knex => {
    await knex.schema.createTable("user", table => {
        table.integer("id")
        table.string("email")
    })

    await knex.schema.createTable("message", table => {
        table.integer("id")
        table.json("data")
        table.string("from_user")
    })

    await knex.schema.createTable("users-message", table => {
        table.integer("user_id").references("id").inTable("user")
        table.string("message_id").references("id").inTable("message")
    })

};

exports.down = async knex => {
    await knex.schema.dropTableIfExists('users-message') 
    await knex.schema.dropTableIfExists('message') 
    await knex.schema.dropTableIfExists('user') 

};
