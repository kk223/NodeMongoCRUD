const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('../config/config.js')
// const user = require('./user')
// const author = require('./auhtor')
// const books = require('./books')

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGO.URL);


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

// app.use('/user',user)

// app.use('/books',books)

// app.use('/author',author)

app.use(function(req, res) {
    let err = new Error('Resource not found');
    err.status = 404;
    return res.status(err.status).json({error: err.message});
});

app.use(function(err, req, res) {
    logger.error('Internal error in watch processor: ', err);
    return res.status(err.status || 500).json({error: err.message});
});

app.listen(8080, '0.0.0.0', function(err, result) {
  if (err) {
    console.error("Error ", err);
  }

  console.log("Server started at 8080");
});

module.exports = app