"use strict";
exports.__esModule = true;
var api_1 = require("../api/api");
var postAssignForm = function (options) {
    var formName = options.formName;
    var sessionId = options.sessionId;
    var groupName = options.groupName;
    api_1.postFormAssign(formName, groupName, sessionId).then(function () {
        console.log("POST ASSIGNE FORM SUCEED");
    });
};
exports["default"] = postAssignForm;
