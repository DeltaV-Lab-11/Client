"use strict";
var app=app||{};

(function(module){

  const bookView={};

  bookView.initIndexPage=function(){
    app.showOnly(".book-view");
    $('#bookList').empty();
    app.Book.all.forEach(book=>{
      $("#bookList").append(book.toHtml())
    });
  };

  bookView.initDetailPage = function(book){
    app.showOnly('.detail-view');
    console.log(book);
    $('#detail').empty().append(book.toHtml());
  };

  bookView.initAddForm=function(){
    app.showOnly(".form-view");
  }

  $("form").on("submit",function(event){
    event.preventDefault();

    let book={
      title: this.title.value,
      author: this.author.value,
      image_url: this.image_url.value,
      description: this.description.value
    };
    
    app.Book.createBook(book);
  })

  module.bookView = bookView;
})(app);

