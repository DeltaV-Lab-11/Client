'use strict';
var app = app || {};

(function(module){
    function errorCallback(err) {
        console.error(err);
        app.errorView.initErrorPage(err);
    }
    let Book = function (book) {
      Object.keys(book).forEach((key)=> {
          this[key]=book[key];
      });
    }
    Book.prototype.toHtml = function() {
        return app.render('bookTemplate', this);
    }

    Book.all = [];
    const compareBy = (key) => (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
    Book.loadAll = function(rows){
        Book.all = rows.sort(compareBy('title')).map(book => new Book(book));
        console.log(Book.all)
    }

    Book.fetchOne = (bookId,callback) =>{
        $.get(`${app.ENV.apiUrl}/api/v1/books/${bookId}`)
            .then(bookData => {console.log(callback);
                callback(new Book(bookData))})
            .catch(errorCallback);
    }

    Book.fetchAll = (callback,errorCallback) => {
    $.get(`${app.ENV.apiUrl}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
    }

    Book.createBook = (book) => {
        $.post(`${app.ENV.apiUrl}/api/v1/books/new`,book)
            .then(()=>page('/'))
            .catch(errorCallback);
    }

    Book.updateBook = (book) => 
    $.ajax({
        method: 'put',
        url: `${app.ENV.apiUrl}/api/v1/books/${book.bookId}`,
        data: book
    })
        .then (()=>page('/'))
        .catch(errorCallback);
    module.Book = Book
})(app);