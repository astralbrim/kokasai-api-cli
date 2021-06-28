import login from "./commands/login";
import auth from "./commands/auth"
import addOwner from "./commands/addOwner";
import addMember from "./commands/addMember";
import getGroup from "./commands/getGroupList";
import getGroupUserList from "./commands/getGroupUserList";
import { parseCommandOptions } from "./parseCommandOptions";
const program = require('commander');


program
    .version('1.0.0')
    .usage("<Command>")

program
    .command("login")
    .option("-i, --id", "学籍番号を指定します")
    .action((cmd, options) => { login(parseCommandOptions(options)) })

program
    .command("auth")
    .option("-i, --id", "学籍番号を指定します")
    .option("-p, --password", "メールに送られてきたパスワードを指定します")
    .action((cmd, options) => {auth(parseCommandOptions(options))})

program
    .command("addOwner")
    .option("-gn, --groupName", "オーナーを追加したいグループ名を指定します")
    .option("-s, --sessionId", "index.js auth で ログに出力されたセッションidを指定します")
    .option("-i, --id", "追加したいオーナーの学籍番号を指定します")
    .action((cmd, options) => {addOwner(parseCommandOptions(options))})

program
    .command("addMember")
    .option("-gn, --groupName", "メンバーを追加したいグループ名を指定します")
    .option("-i, --id", "追加したいメンバーの学籍番号を指定します")
    .option("-s, --sessionId", "index.js auth で ログに出力されたセッションidを指定します")
    .action((cmd, options) => {addMember(parseCommandOptions(options))})

program
    .command("getGroupList")
    .option("-s, --sessionId", "index.js auth で ログに出力されたセッションidを指定します")
    .action((cmd, options) => {getGroup(parseCommandOptions(options))})

program
    .command("getGroupUserList")
    .option("-s, --sessionId", "index.js auth で ログに出力されたセッションidを指定します")
    .option("-gn, --groupName", "ユーザーリストを取得したいグループ名を指定します")
    .action((cmd, options) => {getGroupUserList(parseCommandOptions(options))})



program.parse(process.argv);

exports.program = program;
