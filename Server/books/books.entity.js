var mongoose = require('mongoose');

// defining template (mongoose schema) for storing user credentials in our database
var booksSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        name: String,
        date: timestamp,
        city: string
    },
    language: {
        type: String,
        required: true
    },
    summary: {
        type: String
    },
    available:{
        type:boolean
    },
    pages:{
        type:int
    }

});

module.exports = mongoose.model('Books', userSchema, 'books');
// 'books' is the name of our collection in database 'library'
