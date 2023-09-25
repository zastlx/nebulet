import fs from "fs";
import path from "path";
import { Application } from "express";

type methods = Array<"get" | "post" | "patch" | "delete" | "put">;

export default async function setupRoutes(app: Application, baseDir: string = "") {
    const dir = path.join(__dirname, "..", "endpoints")
    const currentDir = dir.concat("/".concat(baseDir));

    const files = await fs.readdirSync(currentDir);

    for (const file of files) {
        if (!file.includes(".")) {
            setupRoutes(app, path.join(baseDir, file));
            continue;
        }

        const module = (await import(path.join(currentDir, file))).default;
        const methods: methods = module.methods;

        if (file === "index.js") {
            methods.forEach(method => {
                app[method](`/api${path.join(currentDir.replace(dir, ""))}`, module[method]);
            });
            return;
        }

        methods.forEach(method => {
            app[method](`/api${path.join(currentDir.replace(dir, ""), file).replace(".js", "")}`, module[method]);
        });
    }
}