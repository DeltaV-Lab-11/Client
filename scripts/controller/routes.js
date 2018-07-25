"use strict";

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/new', ()=> app.bookView.initAddForm());
page('/books/:id', ctx=> {
    app.Book.fetchOne(ctx.params.id,app.bookView.initDetailPage);
});
page('/books/:id/update', ctx=> {
    app.Book.fetchOne(ctx.params.id, app.bookView.initUpdatePage);
});

page();