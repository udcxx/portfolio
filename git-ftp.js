const execSync = require('child_process').execSync;

execSync("npm run imgmin");

const BRANCH = execSync("git rev-parse --abbrev-ref HEAD")
    .toString()
    .replace(/\r?\n/g, "");
let cmd_ftp;

if (BRANCH === "master") {
    cmd_ftp =
        "git ftp push -s master";
} else {
    cmd_ftp =
        "git ftp push -s dev";
}
// execSync(cmd_ftp);