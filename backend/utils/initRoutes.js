import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export default async function setupRoutes(app, baseDir = "") {
    const dir = path.join(fileURLToPath(new URL('.', import.meta.url)), "..", "endpoints")
    const currentDir = dir.concat("/".concat(baseDir));

    const files = fs.readdirSync(currentDir);

    for (const file of files) {        
        if (!file.includes(".")) {
            setupRoutes(app, path.join(baseDir, file));
            continue;
        }

        const module = (await import(path.join(currentDir, file))).default;
        const methods = module.methods;

        if (file === "index.js") {
            methods.forEach(method => {
                app[method](`/api${path.join(currentDir.replace(dir, ""))}`, module[method]);
            });
            continue;
        }

        methods.forEach(method => {
            app[method](`/api${path.join(currentDir.replace(dir, ""), file).replace(".js", "")}`, module[method]);
        });
    }
}