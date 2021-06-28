"use strict";
exports.__esModule = true;
var api_1 = require("../api/api");
var getGroupUserList = function (options) {
    var groupName = options.groupName, sessionId = options.sessionId;
    api_1.getGroupUserList(groupName, sessionId).then(function (response) {
        console.log("owner: ", response.data.owner);
        console.log("member: ", response.data.member);
    });
};
exports["default"] = getGroupUserList;
