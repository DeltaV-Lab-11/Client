'use strict';
var app = app || {};

(function(module){
    let Book = function (book) {
        this.title = book.title;
        this.author = book.author;
        this.isbn = book.isbn;
        this.image_url = book.image_url;
        this.description = book.description;
    }
    Book.prototype.toHtml = function() {
        return app.render('bookTemplate', this);
    }

    Book.all = [];
    const compareBy = (key) => (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
    Book.loadAll = function(rows){
        console.log(rows);
        Book.all = rows.sort(compareBy('title')).map(book => new Book(book));
        console.log(Book.all)
    }

    Book.fetchOne = (bookId,callback) =>{
        $.get(`${app.ENV.apiUrl}/api/v1/books/${bookId}`)
            .then(bookData => callback(new Book(bookData)))
            .catch(errorCallback);
    }

    Book.fetchAll = (callback,errorCallback) => {
    $.get(`${app.ENV.apiUrl}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

    module.Book = Book
})(app);