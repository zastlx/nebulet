import fs from "fs";
import path from "path";
import { createProxyMiddleware } from "http-proxy-middleware";
import { fileURLToPath } from 'url';

export default async function setupRoutes(app, baseDir = "") {
    const dir = path.join(fileURLToPath(new URL('.', import.meta.url)), "..", "middlewares")
    const currentDir = dir.concat("/".concat(baseDir));

    const files = fs.readdirSync(currentDir);

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

    app.use((req, res, next) => {
        if (req.path.startsWith("/api") || req.path.startsWith("/ws/")) return next();
        viteAppProxyMiddleware(req, res, next);
    });
}