"use strict";

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/add', ctx=> app.bookView.initAddForm(ctx));
page('/books/:id', ctx=> {
    app.Book.fetchOne(ctx.params.id,app.bookView.initDetailPage);
});

page();