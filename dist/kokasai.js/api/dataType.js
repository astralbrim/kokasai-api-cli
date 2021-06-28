"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.mergeFormType = void 0;
var mergeFormType = function (type, value) {
    if (type[0] !== value[0]) {
        return [];
    }
    switch (type[0]) {
        case "string":
            return ["string", __assign(__assign({}, type[1]), value[1])];
        case "check":
            return ["check", __assign(__assign({}, type[1]), value[1])];
        default:
            return [];
    }
};
exports.mergeFormType = mergeFormType;
