const EXEX_SYNC = require("child_process").execSync;
const BRANCH = EXEX_SYNC("git rev-parse --abbrev-ref HEAD")
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
EXEX_SYNC(cmd_ftp);