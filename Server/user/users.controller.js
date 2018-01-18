use strict

const user = require('./author.entity');

														
const createUser= function(user){
	const promise = new Promise(function(resolve,reject){
		author.save({username:'user.username',email:'user.eamil',name:'user.name'},function(err,res){
			if(err)
				reject(err);
			else 
				resolve(res.body)
		});
	});
	return promise;
};




const findUser = function(name) {
	const promise = new Promise(function(resolve, reject) {
		author.findOne({
			name: name
		}, function(err, user) {
			if (err)
				reject(err);
			if (!user) {
				reject({error: 'No user found in mongo..!'});
			}
			resolve(user);
		});
	});
	return promise;
};

const deleteUser = function(username){
	const promise = new Promise(function(resolve,reject){
		author.remove({username:username},function(err,Writeresult){
			if(err)
				reject(err);
			else 
				resolve(Writeresult.body)
		});
	});
	return promise;
}

module.exports = {
	createUser:createUser,
	findUser: findUser,
	deleteUser:deleteUser

};
