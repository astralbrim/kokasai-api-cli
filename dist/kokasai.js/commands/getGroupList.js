"use strict";
exports.__esModule = true;
var api_1 = require("../api/api");
var getGroup = function (options) {
    var sessionId = options.sessionId;
    api_1.getGroupList(sessionId).then(function (response) {
        console.log(response.data.group);
    });
};
exports["default"] = getGroup;
