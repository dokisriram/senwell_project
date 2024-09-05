var router = require('express').Router();
var Joi = require('joi')


var { books, guid, bookSchema } = require('../common');

router.get('/', (req, res) => {
    res.send({books:books})
})

router.get('/:id', (req, res) => {
    var id = req.params.id;
    var book = books.find((book) => book.id == id)
    if(book){
        res.send({book})
    } else {
        res.status(400).send({message: "book not found"})
    }
})

router.post('/', (req, res) => {
    var bookobj = req.body.data;

    var {error} = bookSchema.validate(bookobj)
    if(error){
        console.log(error)
        var errorDetails = error.details.map((er) => er.message).join(' ')
        res.status(400).send(errorDetails)
    } else {
        bookobj['id'] = guid();
        books.push(bookobj)
        res.send({book:bookobj})
    }
})

router.put('/:id',(req, res) => {
    var bookId = req.params.id;
    var book = books.find((el) => el.id == bookId)
    
    if(book){
        var bookObj = req.body.data;
        var {error} = bookSchema.validate(bookObj)
        if(error){
            var errorDetails = error.details.map((er) => er.message ).join(' ')
            res.status(400).send(errorDetails)
        } else {
            book['title'] = bookObj['title']
            book['author'] = bookObj['author']
            book['publishedDate'] = bookObj['publishedDate']
            book['pages'] = bookObj['pages']
            var bookindex = books.findIndex((el) => el.id == bookId)
            console.log(bookindex)
            books.splice(bookindex, 1, book)
            res.send({book})
        }
    } else {
        res.status(400).send({message: "book not found"})
    }
})

router.delete('/:id', (req, res) => {
    var bookid = req.params.id;
    var book = books.find((el) => el.id == bookid);
    if(book){
        var remainingBooks = books.filter((el) => el.id !== bookid)
        books = remainingBooks;
        res.sendStatus(204)
    } else {
        res.status(400).send({message: "book not found"})
    }
})

module.exports = router;