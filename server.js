const express = require('express');
const cors = require('cors')
const knex = require("knex")
const config = require("./knexfile").development

const { Model } = require("objection")

const app = express()
const database = knex(config)
const PORT = process.env.PORT || 3000;
Model.knex(database)

app.use(cors())

class Message extends Model {
    static tableName = "message"
}

class User extends Model {
    static tableName = "user"
    static relationMappings = {
        message: {
            relation: Model.ManyToManyRelation,
            modelClass: Message,
            join: {
                from: 'user.id',
                through: {
                    from: "users-message.user_id",
                    to: "users-message.message_id"
                },
                to: "message.id"
            }
        }
    }
}

class Users_message extends Model {
    static tableName = 'users-sessions'

    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'users-message.user_id',
                to: 'user.id'
            }
        }
    }
    static relationMappings = {
        message: {
            relation: Model.BelongsToOneRelation,
            modelClass: Message,
            join: {
                from: 'users-message.message_id',
                to: 'message.id'
            }
        }
    }
}

app.get("/users", (request, response) => {
    User.query().withGraphFetched('message')
        .then(users => {
            response.json({ users })
        }).catch(error => {
            console.error(error.message)
        })
})

app.get("/notifications", (request, response) => {
    // use to receive any new messages for a user
    // request will have user
})

app.post("/messages", (request, response) => {
    console.log(request.body)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})