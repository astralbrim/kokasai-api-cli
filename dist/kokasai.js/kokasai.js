"use strict";
exports.__esModule = true;
var login_1 = require("./commands/login");
var auth_1 = require("./commands/auth");
var addOwner_1 = require("./commands/addOwner");
var addMember_1 = require("./commands/addMember");
var getGroupList_1 = require("./commands/getGroupList");
var getGroupUserList_1 = require("./commands/getGroupUserList");
var parseCommandOptions_1 = require("./parseCommandOptions");
var postAssignForm_1 = require("./commands/postAssignForm");
var program = require('commander');
program
    .version('1.0.0')
    .usage("<Command>");
program
    .command("login")
    .option("-i, --id", "学籍番号を指定します")
    .description("一番最初に実行してください. ログインをするためのtokenを要求します. オプションに学籍番号を指定してください.")
    .action(function (cmd, options) { login_1["default"](parseCommandOptions_1.parseCommandOptions(options)); });
program
    .command("auth")
    .description("login の次に実行してください. ワンタイムパスワード認証をします. オプションに学籍番号とメールに送られてきたパスワードを指定してください.")
    .option("-i, --id", "学籍番号を指定します")
    .option("-p, --password", "メールに送られてきたパスワードを指定します")
    .action(function (cmd, options) { auth_1["default"](parseCommandOptions_1.parseCommandOptions(options)); });
program
    .command("addOwner")
    .description("グループのオーナーを追加します. Admin限定のコマンドです. オプションで auth でログに出力されたセッションidと追加したいグループと追加したいオーナーの学籍番号を指定してください.")
    .option("-gn, --groupName", "オーナーを追加したいグループ名を指定します")
    .option("-s, --sessionId", "index.js auth で ログに出力されたセッションidを指定します")
    .option("-i, --id", "追加したいオーナーの学籍番号を指定します")
    .action(function (cmd, options) { addOwner_1["default"](parseCommandOptions_1.parseCommandOptions(options)); });
program
    .command("addMember")
    .description("グループのメンバーを追加します. オプションでセッションidと追加したいグループ名と追加したいメンバーの学籍番号を指定してください.")
    .option("-gn, --groupName", "メンバーを追加したいグループ名を指定します")
    .option("-i, --id", "追加したいメンバーの学籍番号を指定します")
    .option("-s, --sessionId", "index.js auth で ログに出力されたセッションidを指定します")
    .action(function (cmd, options) { addMember_1["default"](parseCommandOptions_1.parseCommandOptions(options)); });
program
    .command("getGroupList")
    .description("存在する全てのグループのリストを取得します. Admin限定のコマンドです. オプションでセッションidを指定してください.")
    .option("-s, --sessionId", "index.js auth で ログに出力されたセッションidを指定します")
    .action(function (cmd, options) { getGroupList_1["default"](parseCommandOptions_1.parseCommandOptions(options)); });
program
    .command("getGroupUserList")
    .description("存在するグループのユーザーのリストを取得します. そのグループのアクセス権限がないと取得できません. オプションで取得したいグループ名とセッションidを指定してください.")
    .option("-s, --sessionId", "index.js auth で ログに出力されたセッションidを指定します")
    .option("-gn, --groupName", "ユーザーリストを取得したいグループ名を指定します")
    .action(function (cmd, options) { getGroupUserList_1["default"](parseCommandOptions_1.parseCommandOptions(options)); });
program
    .command("postAssignForm")
    .description("存在するグループにフォームを割り当てます. オプションで割り当てたいグループ名とセッションidを指定してください")
    .option("-s, --sessionId", "ログに出力されたセッションidを指定します")
    .option("-gn, --groupName", "フォームを割り当てたいグループ名を指定します")
    .option("-fn, --formName", "グループに割り当てたいフォーム名を指定します")
    .action(function (cmd, options) { return postAssignForm_1["default"](parseCommandOptions_1.parseCommandOptions(options)); });
program.parse(process.argv);
exports.program = program;
