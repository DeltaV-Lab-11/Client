"use strict";
var app=app||{};

(function(module){

  const bookview={};

  bookview.initIndexPage=function(){
    app.showOnly(".book-view");
    app.Book.all.forEach(x=>{
      $("#bookList").append(book.toHtml())
    });
  }

})(app);

$(function(){
  app.Book.fetchAll(app.bookview.initIndexPage);
})