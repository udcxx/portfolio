const { execSync } = require('child_process');
const fs = require('fs');
const glob = require('glob');

const regexp  = /\.scss$/;
const sassDir = 'src/assets/scss/';
let sassFiles = '';

const files = glob.sync(`${sassDir}**/*.scss`);

for (const file of files) {
    if (regexp.test(file) && file != `${sassDir}style.scss`) {
        sassFiles += `@use "${file.replace(sassDir, '')}";\n`;
    }
}

fs.writeFile(`${sassDir}style.scss`, sassFiles, () => {
    execSync('npm run sass');
    console.log('scss compilation succeeded💫');
});