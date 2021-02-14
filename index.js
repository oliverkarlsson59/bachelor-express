require('dotenv').config({path: __dirname + '/.env'})
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var restRouter = require('./routers/rest.js')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const router = express.Router()

app.use(function (req, res, next){
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    res.header('Expires', '-1')
    res.header('Pragma', 'no-cache')
    next()
})

app.use(router)
app.use('/rest', restRouter)

var { graphqlHTTP } = require('express-graphql')
var root = require('./routers/resolver.js')
var schema = require('./schema/schema.js')

app.use('/api/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: false
}))


app.listen(5000)
console.log("listening on port 5000")