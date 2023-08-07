import fs from "fs";
import path from "path";
import { Application } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

export default async function setupRoutes(app: Application, baseDir: string = "") {
    const dir = path.join(__dirname, "..", "middlewares")
    const currentDir = dir.concat("/".concat(baseDir));

    const files = await fs.readdirSync(currentDir);

    for (const file of files) {
        if (!file.includes(".")) {
            setupRoutes(app, path.join(baseDir, file)) ;
            continue;
        }

        const module = (await import(path.join(currentDir, file))).default;

        app.use(module);
    }

    const viteAppProxyMiddleware = createProxyMiddleware({
        target: "http://localhost:6009",
        changeOrigin: true,
    });

    app.use((req,res,next) => {
        if (req.path.startsWith("/api")) return next()

        viteAppProxyMiddleware(req,res,next);
    });
}