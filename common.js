var Joi = require('joi')

function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

var books = [];

const bookSchema = Joi.object({
    title:Joi.string().required(),
    author:Joi.string().required(),
    publishedDate:Joi.date().required(),
    pages:Joi.number().required()
})

module.exports = {guid:guidGenerator, books, bookSchema}