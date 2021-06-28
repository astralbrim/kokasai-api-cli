import login from "./commands/login";
import auth from "./commands/auth"
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
    .option("-i, --id")
    .action()

program
    .command("addMember")
    .option("-gn, --groupName")
    .option("-i, --id")
    .action(() => {console.log("addMember")})

program.parse(process.argv);

exports.program = program;
