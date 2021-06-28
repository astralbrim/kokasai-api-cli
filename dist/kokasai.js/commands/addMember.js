"use strict";
exports.__esModule = true;
var api_1 = require("../api/api");
var addMember = function (options) {
    var groupName = options.groupName, sessionId = options.sessionId, id = options.id;
    var ownerList;
    var memberList;
    api_1.getGroupUserList(groupName, sessionId)
        .then(function (response) {
        memberList = response.data.member;
        ownerList = response.data.owner;
        if (!(memberList.includes(id)))
            memberList.push(id);
    })["catch"](function (response) {
        memberList = [].concat(id);
        ownerList = [];
    })["finally"](function () {
        api_1.postGroupUserList(groupName, { owner: ownerList, member: memberList }, sessionId).then(function () { return console.log("POST GROUP USER SUCCEED RUN \"getGroupUserList\" ✔︎ "); });
    });
};
exports["default"] = addMember;
