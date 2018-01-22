const express = require('express');
const router = express.Router();
const authorController = require('./author.controller');
const user = require('./auhtor.entity');
/*
 * What this API do: It'll pass the user detail and fetch the database in order to decide whether the user exist or not and
 *                   on the basis of that preform the desired action
 */
router.get('/:authorname', function(req, res) {
    try {
        let authorname = req.params.authorname;
        authorController.findAuthor(authorame).then(function(user) {
            res.status(200).send({user: user});
        }, function(err) {
            res.status(500).send({error: 'Failed to complete operation...!'});
        });
    } catch (ex) {
        res.status(500).send({error: 'Internal server error.'});
    }
});

router.post('/:createauthor',function(req,res){
    try{
                let author= new author(req.body);
                authorController.createAuthor(author).then(function(user){
                    res.status(200).send({user:user.name  "created"});
                },function(err){
                    res.status(500).send({error: "failed to complete operation....!"});
                });
    } catch(ex){
        res.status(500).send({error: 'Internal error'});
    }
})

module.exports = router;
