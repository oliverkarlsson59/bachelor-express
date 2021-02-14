var { graphql, buildSchema } = require('graphql')
var { graphqlHTTP } = require('express-graphql')
const DbHandler = require('../database/dbhandler.js')
require('../database/dbhandler.js')
var db = new DbHandler()

var root = {
    commentById: ({id}) => {
        return new Promise((resolve, reject) => {
            db.getCommentById(id, function(result){
                resolve(result[0])
            })
        });
    },
    comments: ({limit}) => {
        return new Promise((resolve, reject) => {
            db.getComments(limit, function(result){
                resolve(result)
            })
        });
    },

    commentByUserId: ({id}) => {
        return new Promise((resolve, reject) => {
            db.getCommentByJoinUserId(id, function(result){
                resolve(result[0])
            })
        });
    },
  
    commentsByUserId: ({id, limit}) => {
        return new Promise((resolve, reject) => {
            db.getCommentsByJoinUserId(id, limit, function(result){
                resolve(result)
            })
        });
    },
    
}

module.exports = root