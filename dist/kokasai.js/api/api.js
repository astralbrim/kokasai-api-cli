"use strict";
exports.__esModule = true;
exports.postGroupFormSubmit = exports.getGroupForm = exports.getGroupFormList = exports.getUserGroupList = exports.getUserDocumentList = exports.postFormAssign = exports.getFormAssign = exports.postGroupUserList = exports.getGroupUserList = exports.postGroupDocumentList = exports.getGroupDocumentList = exports.getGroupList = exports.postDocument = exports.getDocument = exports.getSession = exports.postLogoutAll = exports.postLogout = exports.postLogin = exports.postAuth = exports.getAuth = exports.URL = void 0;
var js_base64_1 = require("js-base64");
var axios_1 = require("axios");
axios_1["default"].defaults.withCredentials = true;
var defaultHeaders = function (sessionId) { return ({
    Session: sessionId
}); };
exports.URL = "https://dev-api.kokasai.com";
/**
 * ログイン認証されているか取得する。
 * [GET /auth](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-auth)
 */
var getAuth = function (sessionId) {
    return axios_1["default"].get(exports.URL + "/auth", { headers: defaultHeaders(sessionId) });
};
exports.getAuth = getAuth;
/**
 * ログイン認証する。
 * [POST /auth](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-auth)
 * @param id 学籍番号
 * @param pass パスワード
 */
var postAuth = function (id, pass) {
    var headers = {
        Authorization: "Basic " + js_base64_1.Base64.encode(id + ":" + pass)
    };
    return axios_1["default"].post(exports.URL + "/auth", null, { headers: headers }).then();
};
exports.postAuth = postAuth;
/**
 * ログイン用のパスワードを発行する。
 * [POST /login](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-login)
 * @param id ログインする学籍番号
 */
var postLogin = function (id) {
    return axios_1["default"].post(exports.URL + "/login", { id: id });
};
exports.postLogin = postLogin;
/**
 * ログアウトする。
 * [POST /logout](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-logout)
 */
var postLogout = function (sessionId) {
    return axios_1["default"].post(exports.URL + "/logout", undefined, { headers: defaultHeaders(sessionId) });
};
exports.postLogout = postLogout;
/**
 * ログアウトする。
 * [POST /logout/all](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-logoutall)
 */
var postLogoutAll = function (sessionId) {
    return axios_1["default"].post(exports.URL + "/logout/all", undefined, { headers: defaultHeaders(sessionId) });
};
exports.postLogoutAll = postLogoutAll;
/**
 * セッション数を取得する。
 * [GET /session](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-session)
 */
var getSession = function (sessionId) {
    return axios_1["default"].get(exports.URL + "/session", { headers: defaultHeaders(sessionId) });
};
exports.getSession = getSession;
/**
 * ドキュメントファイルを取得する。
 * [GET /document](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-documentname)
 * @param documentName 取得するドキュメントの名前
 */
var getDocument = function (documentName, sessionId) {
    return axios_1["default"].get(exports.URL + "/document/" + documentName, {
        headers: defaultHeaders(sessionId),
        responseType: "blob"
    });
};
exports.getDocument = getDocument;
/**
 * ドキュメントファイルを変更する。
 * [POST /document](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-documentname)
 * @param documentName 変更するドキュメントの名前
 * @param document 変更するドキュメントの内容
 */
var postDocument = function (documentName, document, sessionId) {
    var formData = new FormData();
    formData.append("file", document);
    var headers = defaultHeaders(sessionId);
    headers["content-type"] = "multipart/form-data";
    return axios_1["default"].post(exports.URL + "/document/" + documentName, formData, { headers: headers });
};
exports.postDocument = postDocument;
/**
 * 全グループ一覧を取得する。
 * [GET /group/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-grouplist)
 */
var getGroupList = function (sessionId) {
    return axios_1["default"].get(exports.URL + "/group/list", { headers: defaultHeaders(sessionId) });
};
exports.getGroupList = getGroupList;
/**
 * グループに紐づけられているドキュメントファイル一覧を取得する。
 * [GET /group/document/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-groupdocumentlistname)
 * @param groupName 取得するグループの名前
 */
var getGroupDocumentList = function (groupName, sessionId) {
    return axios_1["default"].get(exports.URL + "/group/document/list/" + groupName, {
        headers: defaultHeaders(sessionId)
    });
};
exports.getGroupDocumentList = getGroupDocumentList;
/**
 * グループに紐づけられているドキュメントファイル一覧を変更する。
 * [POST /group/document/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-groupdocumentlistname)
 * @param groupName 変更するグループの名前
 * @param data 変更後の一覧
 */
var postGroupDocumentList = function (groupName, data, sessionId) {
    return axios_1["default"].post(exports.URL + "/group/document/list/" + groupName, data, {
        headers: defaultHeaders(sessionId)
    });
};
exports.postGroupDocumentList = postGroupDocumentList;
/**
 * グループに属するユーザー一覧を取得する。
 * [GET /group/user/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-groupuserlistname)
 * @param groupName 取得するグループの名前
 */
var getGroupUserList = function (groupName, sessionId) {
    return axios_1["default"].get(exports.URL + "/group/user/list/" + groupName, {
        headers: defaultHeaders(sessionId)
    });
};
exports.getGroupUserList = getGroupUserList;
/**
 * グループに属するユーザー一覧を変更する。
 * [POST /group/user/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-groupuserlistname)
 * @param groupName 変更するグループの名前
 * @param data 変更後の一覧
 */
var postGroupUserList = function (groupName, data, sessionId) {
    return axios_1["default"].post(exports.URL + "/group/user/list/" + groupName, data, {
        headers: defaultHeaders(sessionId)
    });
};
exports.postGroupUserList = postGroupUserList;
/**
* フォームが割り当てられたグループ一覧を取得する。
* [GET /form/assign](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-formassignname)
* @param formName フォーム名
*/
var getFormAssign = function (formName, sessionId) {
    return axios_1["default"].get(exports.URL + "/form/assign/" + formName, { headers: defaultHeaders(sessionId) });
};
exports.getFormAssign = getFormAssign;
/**
 * フォームが割り当てられたグループ一覧を変更する。
 * [POST /form/assign](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-formassignname)
 * @param formName フォーム名
 * @param data 変更後の一覧
 */
var postFormAssign = function (formName, data, sessionId) {
    return axios_1["default"].post(exports.URL + "/form/assign/" + formName, data, {
        headers: defaultHeaders(sessionId)
    });
};
exports.postFormAssign = postFormAssign;
/**
 * ユーザーがアクセスできるドキュメントファイルの一覧を取得する。
 * [GET /user/document/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-userdocumentlist)
 */
var getUserDocumentList = function (sessionId) { return axios_1["default"].get(exports.URL + "/user/document/list", { headers: defaultHeaders(sessionId) }); };
exports.getUserDocumentList = getUserDocumentList;
/**
 * ユーザーが属しているグループ一覧を取得する。
 * [GET /user/group/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-usergrouplist)
 */
var getUserGroupList = function (sessionId) { return axios_1["default"].get(exports.URL + "/user/group/list", { headers: defaultHeaders(sessionId) }); };
exports.getUserGroupList = getUserGroupList;
/**
 * 指定グループのフォーム一覧を取得する
 * [GET /group/form/list/](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-groupformlistname)
 */
var getGroupFormList = function (groupName, sessionId) {
    return axios_1["default"].get(exports.URL + "/group/form/list/" + groupName, {
        headers: defaultHeaders(sessionId)
    });
};
exports.getGroupFormList = getGroupFormList;
/**
 * 指定グループのフォームの内容を取得する
 * [GET /group/form/get/](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-groupformgetgroupnameformname)
 * @param groupName 取得するグループの名前
 * @param formName 取得するフォームの名前
 */
var getGroupForm = function (groupName, formName, sessionId) {
    return axios_1["default"].get(exports.URL + "/group/form/get/" + groupName + "/" + formName, {
        headers: defaultHeaders(sessionId)
    });
};
exports.getGroupForm = getGroupForm;
/** 指定グループのフォーム送信を行う
 * [POST /group/form/submit/](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-groupformsubmitgroupnameformname)
 * @param groupName 送信するフォームのグループの名前
 * @param formName 送信するフォームの名前
 * @param data 送信するデータ
 */
var postGroupFormSubmit = function (groupName, formName, data, sessionId) {
    return axios_1["default"].post(exports.URL + "/group/form/submit/" + groupName + "/" + formName, data, {
        headers: defaultHeaders(sessionId)
    });
};
exports.postGroupFormSubmit = postGroupFormSubmit;
