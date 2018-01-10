use strict

const user = require('./author.entity');


const createBooks= function(title,author,publisher,language,summary,available,pages){
	const promise = new Promise(function(resolve,reject){
		author.save({title:'title',author:'author',publisher:'publisher',language:'language',summary:'summary',available:'available',pages:'pages'},
			function(err,res){
			if(err)
				reject(err);
			else 
				resolve(res.body)
		});
	});
	return promise;
};

const findBooks = function(title) {
	const promise = new Promise(function(resolve, reject) {
		author.findOne({
			title: title
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

const deleteBooks = function(username){
	const promise = new Promise(function(resolve,reject){
		author.remove({title:title},function(err,Writeresult){
			if(err)
				reject(err);
			else 
				resolve(Writeresult.body)
		});
	});
	return promise;
}

module.exports = {
	createBooks:createBooks,
	findBooks: findBooks,
	deleteBooks:deleteBooks

};
