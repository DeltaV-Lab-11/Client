'use strict';
var app = app || {};

(function(module){
        module.Book = function (title, author, isbn, image_url, description) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.image_url = image_url;
        this.description = description;
    }
    Book.toHtml = function() {
        return app.render('bookTemplate', this);
    }

    Book.all = [];
    const compareBy = (key) => (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
    Book.loadAll = function(rows){
        Book.all = rows.sort(compareBy('title')).map(book => new Book(book));
    }

    Book.fetchAll = callback =>
    $.get(`${app.ENV.ENVIRONMENT.apiUrl}/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  module.Book = Book;
})(app);