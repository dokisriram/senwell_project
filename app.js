var express = require('express');

var app = express();
var booksRoute = require('./router/booksRoute')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/books',booksRoute)

module.exports = app;
