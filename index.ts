import login from "./commands/login";
import auth from "./commands/auth"
import addOwner from "./commands/addOwner";
import addMember from "./commands/addMember";
import getGroup from "./commands/getGroupList";
const program = require('commander');


program
    .version('1.0.0')
    .usage("<Command>")

program
    .command("login")
    .option("-i, --id")
    .action((cmd, options) => { login(options) })

program
    .command("auth")
    .option("-i, --id")
    .option("-p, --password")
    .action((cmd, options) => {auth(options)})

program
    .command("addOwner")
    .option("-gn, --groupName")
    .option("-s, --sessionId")
    .option("-i, --id")
    .action((cmd, options) => {addOwner(options)})

program
    .command("addMember")
    .option("-gn, --groupName")
    .option("-i, --id")
    .action((cmd, options) => {addMember(options)})

program
    .command("getGroupList")
    .option("-s, --sessionId")
    .action((cmd, options) => {getGroup(options)})

program.parse(process.argv);

exports.program = program;
