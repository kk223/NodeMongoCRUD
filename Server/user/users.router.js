const express = require('express');
const router = express.Router();
const userController = require('./users.controller');
const user = require('./users.entity');
/*
 * What this API do: It'll pass the user detail and fetch the database in order to decide whether the user exist or not and
 *                   on the basis of that preform the desired action
 */
router.get('/:username', function(req, res) {
    try {
        let username = req.params.username;
        userController.findUser(username).then(function(user) {
            res.status(200).send({user: user});
        }, function(err) {
            res.status(500).send({error: 'Failed to complete operation...!'});
        });
    } catch (ex) {
        res.status(500).send({error: 'Internal server error.'});
    }
});

router.post('/:userprofile',function(req.res){
    try{
        let 
    }
})
router.post('/:createuser',function(req,res){
    try{
                let user= new user(req.body);
                userController.createUser(user).then(function(user){
                    res.status(200).send({user:user.name  "created"});
                },function(err){
                    res.status(500).send({error: "failed to complete operation....!"});
                });
    } catch(ex){
        res.status(500).send({error: 'Internal error'});
    }
})

module.exports = router;
