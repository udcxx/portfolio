const { execSync } = require('child_process');
const fs = require('fs');
const glob = require('glob');

const regexp  = /\.scss$/;
const sassDir = 'src/assets/scss/';
let sassFiles = '';
sassFiles += `@use "base/_reset.scss";\n`;

const files = glob.sync(`${sassDir}**/_*.scss`);

for (const file of files) {
    if (regexp.test(file) && file != `${sassDir}style.scss` && file != `${sassDir}base/_reset.scss`) {
        sassFiles += `@use "${file.replace(sassDir, '')}";\n`;
    }
}

fs.writeFile(`${sassDir}style.scss`, sassFiles, () => {
    execSync('npm run sass');
    console.log('scss compilation succeeded💫');
});