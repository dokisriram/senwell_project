var request = require('supertest')
const app = require('../app')

test('get all books', async() => {
    await request(app).get('/books')
    .expect({books:[]})
})

// test('create a book', async() => {
//     await request(app).post('/books').send({
//         data:{
//             title:"sriram book",
//             author:"sriram",
//             publishedDate:"05-09-2024",
//             pages:23
//         }
//     })
//     .expect().not.toBe({message:''})
    
// })

test('update a book', async() => {
    await request(app).put('/books/1234455').send({
        data:{
            title:"sriram book",
            author:"sriram",
            publishedDate:"05-09-2024",
            pages:23
        }
    })
    .expect({message:"book not found"})
    
})
test('delete a book', async() => {
    await request(app).delete('/books/123')
    .expect({message: "book not found"})
})