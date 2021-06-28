"use strict";
exports.__esModule = true;
var api_1 = require("../api/api");
var auth = function (options) {
    var id = options.id, password = options.password;
    api_1.postAuth(id, password)
        .then(function (response) {
        console.log("Auth OK");
        console.info(response.headers.session);
    });
};
exports["default"] = auth;
