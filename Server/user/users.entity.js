var mongoose = require('mongoose');

// defining template (mongoose schema) for storing user credentials in our database
var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
        unique: true
    }
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', userSchema, 'users');
// 'users' is the name of our collection in database 'library'
