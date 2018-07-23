"use strict";
var app=app||{};

(function(module){

  const bookView={};

  bookView.initIndexPage=function(){
    app.showOnly(".book-view");
    app.Book.all.forEach(book=>{
      $("#bookList").append(book.toHtml())
    });
  };

  module.bookView = bookView;
})(app);

$(function(){
  app.Book.fetchAll(app.bookView.initIndexPage);
})