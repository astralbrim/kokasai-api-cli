"use strict";
exports.__esModule = true;
var api_1 = require("../api/api");
var addOwner = function (options) {
    var groupName = options.groupName, sessionId = options.sessionId, id = options.id;
    var ownerList;
    var memberList;
    api_1.getGroupUserList(groupName, sessionId)
        .then(function (response) {
        ownerList = response.data.owner;
        memberList = response.data.member;
        if (!(ownerList.includes(id)))
            ownerList.push(id);
    })["catch"](function (response) {
        ownerList = [].concat(id);
        memberList = [];
    })["finally"](function () {
        api_1.postGroupUserList(groupName, { owner: ownerList, member: memberList }, sessionId).then(function () {
            console.log("POST GROUP USER SUCCEED RUN \"getGroupUserList\" ✔︎ ");
        });
    });
};
exports["default"] = addOwner;
