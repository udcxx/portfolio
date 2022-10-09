import sass from "https://deno.land/x/denosass/mod.ts";
import { extname, dirname, join, basename, resolve } from "https://deno.land/std@0.154.0/path/posix.ts";
import { serve } from "https://deno.land/std@0.141.0/http/mod.ts";
import { serveDir } from "https://deno.land/std@0.141.0/http/file_server.ts";

const watchDir = 'src';
const distDir = 'dist';
const exceptDir = ['src/asets/css'];
const addr = ":8080";

serve((request: Request) => {
    console.log(`http://localhost${addr}`);

    return serveDir(request, { fsRoot : distDir });
}, { addr });

let watcher = Deno.watchFs(watchDir);
let now = '';

for await (const event of watcher) {
    let newNow = new Date().getSeconds();

    if (now != newNow) {
        event.paths.forEach(path => {
            console.log(path);

            if(extname(path) === '.scss') {
                const sassFiles = sass(['src/assets/css/']);
                sassFiles.to_file({
                    destDir: './dist/assets/css'
                });
            } else if (!exceptDir.includes(dirname(path))) {
                try {
                    Deno.copyFileSync(path, path.replace(watchDir, distDir));
                } catch (error) {
                    console.log('error');
                }
            }
        });
    }

    now = newNow;
}
//
// const sassFiles = sass(["./src/assets/css"]);
//
// sassFiles.to_file({
//     destDir: './dist/css',
// });
//
//
//
// copySync("./src", "./dist", { overwrite: true });
