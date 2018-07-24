'use strict';

var app = app || {};

(function(module){
    module.ENV = {
        isProduction:/^(?!localhost|127)/.test(window.location.hostname),
        productionApiUrl:'https://tr-et-booklist.herokuapp.com',
        devApiUrl:'http://localhost:3000'
    }
    
    module.ENV.apiUrl = module.ENV.isProduction ? module.ENV.productionApiUrl: module.ENV.devApiUrl

    module.showOnly = function(selected) {
        $("main > section").hide()
        $(selected).show()
    }
    let templateCache = {};
    module.render = function(templateId, dataToRender) {
        let template = templateCache[templateId];

        if(!template) {
            template = Handlebars.compile(document.getElementById(templateId).innerText);

            templateCache[templateId] = template;
        }
        return template(dataToRender);
    }

  
})(app);