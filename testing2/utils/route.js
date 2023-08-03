import path from "path";
import fs, { readdirSync } from "fs";

export default async function setupRoutes(app, baseDir = "") {
    const dir = "./endpoints"
    const currentDir = path.join(dir, baseDir);
    console.log(readdirSync(currentDir));


    const files = fs.readdirSync(currentDir);

    for (const file of files) {
        console.log(file);
        if (!file.includes(".")) return setupRoutes(app, path.join(baseDir, file))

        const module = (await import("../".concat(path.join(currentDir, file)))).default;

        module.methods.forEach(method => {
            app[method](`/api/${path.join(currentDir.split("/").filter((_, index) => index !== 0).join("/"), file.split(".")[0] === "index" ? "" : file.split(".")[0])}`, module[method]);
        });
    }
}