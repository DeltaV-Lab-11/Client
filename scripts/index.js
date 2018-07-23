'use strict';

var app = app || {};

const ENV = {
    isProduction:/^(?!localhost|127)/.test(window.location.hostname),
    productionApiUrl:'https://tr-et-booklist.herokuapp.com',
    devApiUrl:'http://localhost:3000',
    ENVIRONMENT = {
        apiUrl: isProduction ? productionApiUrl: developmentApiUrl
    }
}