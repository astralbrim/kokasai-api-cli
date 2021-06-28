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
    .option("-i, --id")
    .action((cmd, options) => { login(parseCommandOptions(options)) })

program
    .command("auth")
    .option("-i, --id")
    .option("-p, --password")
    .action((cmd, options) => {auth(parseCommandOptions(options))})

program
    .command("addOwner")
    .option("-gn, --groupName")
    .option("-s, --sessionId")
    .option("-i, --id")
    .action((cmd, options) => {addOwner(parseCommandOptions(options))})

program
    .command("addMember")
    .option("-gn, --groupName")
    .option("-i, --id")
    .action((cmd, options) => {addMember(parseCommandOptions(options))})

program
    .command("getGroupList")
    .option("-s, --sessionId")
    .action((cmd, options) => {getGroup(parseCommandOptions(options))})

program
    .command("getGroupUserList")
    .option("-s, --sessionId")
    .option("-gn, --groupName")
    .action((cmd, options) => {getGroupUserList(parseCommandOptions(options))})


program.parse(process.argv);

exports.program = program;
