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
    .description("一番最初に実行してください. ログインをするためのtokenを要求します. オプションに学籍番号を指定してください.")
    .action((cmd, options) => { login(parseCommandOptions(options)) })

program
    .command("auth")
    .description("login の次に実行してください. ワンタイムパスワード認証をします. オプションに学籍番号とメールに送られてきたパスワードを指定してください.")
    .option("-i, --id", "学籍番号を指定します")
    .option("-p, --password", "メールに送られてきたパスワードを指定します")
    .action((cmd, options) => {auth(parseCommandOptions(options))})

program
    .command("addOwner")
    .description("グループのオーナーを追加します. Admin限定のコマンドです. オプションで auth でログに出力されたセッションidと追加したいグループと追加したいオーナーの学籍番号を指定してください.")
    .option("-gn, --groupName", "オーナーを追加したいグループ名を指定します")
    .option("-s, --sessionId", "index.js auth で ログに出力されたセッションidを指定します")
    .option("-i, --id", "追加したいオーナーの学籍番号を指定します")
    .action((cmd, options) => {addOwner(parseCommandOptions(options))})

program
    .command("addMember")
    .description("グループのメンバーを追加します. オプションでセッションidと追加したいグループ名と追加したいメンバーの学籍番号を指定してください.")
    .option("-gn, --groupName", "メンバーを追加したいグループ名を指定します")
    .option("-i, --id", "追加したいメンバーの学籍番号を指定します")
    .option("-s, --sessionId", "index.js auth で ログに出力されたセッションidを指定します")
    .action((cmd, options) => {addMember(parseCommandOptions(options))})

program
    .command("getGroupList")
    .description("存在する全てのグループのリストを取得します. Admin限定のコマンドです. オプションでセッションidを指定してください.")
    .option("-s, --sessionId", "index.js auth で ログに出力されたセッションidを指定します")
    .action((cmd, options) => {getGroup(parseCommandOptions(options))})

program
    .command("getGroupUserList")
    .description("存在するグループのユーザーのリストを取得します. そのグループのアクセス権限がないと取得できません. オプションで取得したいグループ名とセッションidを指定してください.")
    .option("-s, --sessionId", "index.js auth で ログに出力されたセッションidを指定します")
    .option("-gn, --groupName", "ユーザーリストを取得したいグループ名を指定します")
    .action((cmd, options) => {getGroupUserList(parseCommandOptions(options))})



program.parse(process.argv);

exports.program = program;
