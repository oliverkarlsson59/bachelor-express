const { json } = require('body-parser')
var express = require('express')
const DbHandler = require('../database/dbhandler')
var router = express.Router()

require('../database/dbhandler')
var db = new DbHandler()


router.get('/comment/:id', function(req, res){
    var id = req.params.id
    db.getCommentById(id, function(result){
        res.json(result)
    })
})

router.get('/comments/:limit', function(req, res){
    var limit = req.params.limit
    db.getComments(limit, function(result){
        res.json(result)
    })
})


router.get('/user/:id/comment', function(req, res){
    var id = req.params.id
    db.getCommentByJoinUserId(id, function(result){
        res.json(result)
    })
})


router.get('/user/:id/comments/:limit', function(req, res){
    var id = req.params.id
    var limit = req.params.limit
    db.getCommentsByJoinUserId(id, limit, function(result){
        res.json(result)
    })
})


module.exports = router