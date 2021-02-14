
var pool = require('./connect.js')

class DbHandler {
    constructor() {}

    getCommentById(id, callback){
        var sql = "SELECT comment_id as id, thread_id as threadId, user_id as userId, body, datemade, datelastupdated FROM comment WHERE comment_id=?"
        var values = [parseInt(id)]
        pool.getConnection(function(err, conn){
            conn.query(sql, values, function(err, rows, fields){
                conn.release()
                callback(rows)
            })
        })

    }


    getComments(limit, callback){
        var sql = "SELECT comment_id as id, thread_id as threadId, user_id as userId, body, datemade, datelastupdated FROM comment LIMIT ?"
        var values = [parseInt(limit)]
        pool.getConnection(function(err, conn){
            conn.query(sql, values, function(err, rows, fields){
                conn.release()
                callback(rows)
            })
        })

    }

    getCommentByJoinUserId(id, callback){
        var sql = "SELECT comment.comment_id as id, comment.thread_id as threadId, user.user_id as userId, comment.body, comment.datemade, comment.datelastupdated FROM comment INNER JOIN user on comment.user_id=user.user_id WHERE user.user_id=? LIMIT 1"
        var values = [parseInt(id)]
        pool.getConnection(function(err, conn){
            conn.query(sql, values, function(err, rows, fields){
                conn.release()
                callback(rows)
            })
        })
    }


    getCommentsByJoinUserId(id, limit, callback){
        var sql = "SELECT comment.comment_id as id, comment.thread_id as threadId, user.user_id as userId, comment.body, comment.datemade, comment.datelastupdated FROM comment INNER JOIN user on comment.user_id=user.user_id WHERE user.user_id=? LIMIT ?";
        var values = [
            parseInt(id),
            parseInt(limit)
        ]
        pool.getConnection(function(err, conn){
            conn.query(sql, values, function(err, rows, fields){
                conn.release()
                callback(rows)
            })
        })
    }

    
}

module.exports = DbHandler


