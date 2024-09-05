
1. For getting all books , you use '/books' GET route

2. For getting one book , you use '/books/id' GET route

3. For creating book, you use '/books' POST route

in this route inside body you pass a object like 
{
    "data": {
        "title": "",
        "author":"",
        "publishedDate": "05-08-2024",
        "pages":23
    }
}
All feilds are mandatory and pages is number type, publishedDate is date type, title and author is string type


4. For updating a book you use '/books/id' PUT route

in this route inside body you pass a object like, and id is mandatory which is passed by params
{
    "data": {
        "title": "",
        "author":"",
        "publishedDate": "05-08-2024",
        "pages":23
    }
}

All feilds are mandatory and pages is number type, publishedDate is date type, title and author is string type


5. For deleting book you use '/books/id' DELETE route
in this route id is mandatory 


For running project use command "npm start"
For running test cases use command "npm test"