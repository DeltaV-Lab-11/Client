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

  $("add-form").on("submit",function(event){
    event.preventDefault();

    let book={
      title: this.title.value,
      author: this.author.value,
      image_url: this.image_url.value,
      description: this.description.value
    };
    
    app.Book.createBook(book);
  })

  bookView.initUpdatePage=function(book){
    app.showOnly(".update-view");

    $('#update-form').find('[name="bookId"]').val(book.bookId);
  }

  $("#update-form").on("submit",function(event){
    event.preventDefault();

    let book={
      bookId: parseInt(this.bookId.value),
      title: this.title.value,
      author: this.author.value,
      image_url: this.image_url.value,
      description: this.description.value
    };
    
    app.Book.updateBook(book);
  })

  module.bookView = bookView;
})(app);

