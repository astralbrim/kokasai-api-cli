"use strict";
exports.__esModule = true;
var api_1 = require("../api/api");
var login = function (options) {
    var id = options.id;
    api_1.postLogin(id).then(function (response) {
        console.log("SUCCESS LOGGED IN!! CHECK YOUR E-MAIL👀");
    });
};
exports["default"] = login;
