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
    $('#detail').empty().append(app.render('bookTemplate' , book));
  };

  bookView.initAddForm= ()=>{
    app.showOnly(".form-view");
  }

  $("#add-form").on("submit",function(event){
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

    let $form = $('#update-form');
    Object.keys(book).forEach(key =>{
      $form.find(`[name = "${key}"]`).val(book[key]);
    })
   
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


 bookView.initDeletePage = function(book){
   app.showOnly(".delete-view");
   $('#delete-form').find('[name="bookId"]').val(book.bookId);
   $('#delete-form').find('[name="confirm"]').prop("checked" , false);
  }

  $("#delete-form").on('submit', function(event) {
    event.preventDefault();
    let bookId = parseInt(this.bookId.value);
    app.Book.deleteOne(bookId);
  });



  module.bookView = bookView;
})(app);

