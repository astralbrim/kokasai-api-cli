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
exports.parseCommandOptions = void 0;
var parseCommandOptions = function (options) {
    var optionList = options.opts();
    var optionsMap;
    Object.keys(optionList).forEach(function (option, index) {
        var _a, _b;
        if (((options.args[index].slice(0, 1) === "["))) {
            optionsMap = __assign(__assign({}, optionsMap), (_a = {}, _a[option] = [], _a));
            var targetString = options.args[index];
            targetString = targetString.replace("[", "");
            targetString = targetString.replace("]", "");
            var targetStringArray = targetString.split(",");
            targetStringArray.forEach(function (str, index) {
                var _a;
                optionsMap = __assign(__assign({}, optionsMap), (_a = {}, _a[option] = optionsMap[option].concat(str), _a));
            });
        }
        else {
            optionsMap = __assign(__assign({}, optionsMap), (_b = {}, _b[option] = options.args[index], _b));
        }
    });
    console.log(optionsMap);
    return optionsMap;
};
exports.parseCommandOptions = parseCommandOptions;
