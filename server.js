const express = require('express');
const cors = require('cors')
const knex = require("knex")
const config = require("./knexfile").development
const bodyParser = require("body-parser")
const { Model } = require("objection");
const { response } = require('express');

const app = express()
const database = knex(config)
const PORT = process.env.PORT || 3000;
Model.knex(database)

app.use(cors())
app.use(bodyParser.json())

class Highlight extends Model {
    static tableName = "highlight"
}
class Site extends Model {
    static tableName = "site"
    static relationMappings = {
        highlight: {
            relation: Model.HasManyRelation,
            modelClass: Highlight,
            join: {
                from: 'site.id',
                to: "highlight.site_id"
            }
        }
    }
}

class User extends Model {
    static tableName = "user"
    static relationMappings = {
        site: {
            relation: Model.HasManyRelation,
            modelClass: Site,
            join: {
                from: 'user.id',
                to: "site.user_id"
            }
        }
    }
}

app.get("/users", (request, response) => {
    User.query().withGraphFetched('site.highlight')
        .then(users => {
            response.json({ users })
        }).catch(error => {
            console.error(error.message)
        })
})

app.post("/shared-messages", async (request, response) => {
    const { email } = request.body
    const user = await User.query()
        .where('email', email)
        .withGraphFetched('site')
    const userID = user[0].id
    
    const sites = await Site.query()
        .withGraphFetched('highlight')
        .where('user_id', userID)
        .then(notifications => response.json( notifications ) )
    
        // console.log(notifications)
})

app.post("/send-site", async (request, response) => {
    const { from, to, data } = request.body
    const url = Object.keys(data)[0]
    const highlight = data[url]

    const user = await User.query()
        .where("email", to)
    const new_message = await Site.query()
        .withGraphFetched('highlight')
        .insertGraph({
            user_id: user[0].id,
            from_user: from,
            url: url,
            read: false,
            highlight: highlight
        })
    
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})