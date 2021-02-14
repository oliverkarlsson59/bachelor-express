var { graphql, buildSchema } = require('graphql')
var { graphqlHTTP } = require('express-graphql')

//this schema defines all the different types of queries that are accepted


var schema = buildSchema(`
    type Query {
        commentById(id: ID!): Comment,
        comments(limit: String!): [Comment],
        commentByUserId(id: ID!): Comment,
        commentsByUserId(id: ID!, limit: String!): [Comment]

    },
    type User {
        id: Int,
        name: String,
        email: String,
        phone: String,
        datemade: String,
        datelastupdated: String
        
    },
    type Comment {
        id: Int,
        threadId: Int,
        userId: Int,
        body: String,
        datemade: String,
        datelastupdated: String
    }
    type Category {
        id: Int,
        name: String,
        description: String,
        datemade: String,
        datelastupdated: String
    },
    type Thread {
        id: Int,
        categoryId: Int,
        userId: Int,
        title: String,
        body: String,
        datemade: String,
        datelastupdated: String
    }
`)

module.exports = schema