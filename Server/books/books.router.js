const express = require('express');
const router = express.Router();
const booksController = require('./books.controller');
const user = require('./books.entity');
/*
 * What this API do: It'll pass the user detail and fetch the database in order to decide whether the user exist or not and
 *                   on the basis of that preform the desired action
 */
router.get('/:bookname', function(req, res) {
    try {
        let bookname = req.params.bookname;
        booksController .findUser(bookname).then(function(user) {
            res.status(200).send({user: user});
        }, function(err) {
            res.status(500).send({error: 'Failed to complete operation...!'});
        });
    } catch (ex) {
        res.status(500).send({error: 'Internal server error.'});
    }
});

router.post('/:booksprofile',function(req.res){
    try{
        let 
    }
})
router.post('/:createbooks',function(req,res){
    try{
                let books= new books(req.body);
               booksController .createbooks(books).then(function(user){
                    res.status(200).send({books:books.name  "created"});
                },function(err){
                    res.status(500).send({error: "failed to complete operation....!"});
                });
    } catch(ex){
        res.status(500).send({error: 'Internal error'});
    }
})

module.exports = router;
