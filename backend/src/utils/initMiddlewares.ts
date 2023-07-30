import path from "path";
import fs from "fs";
import {
    Application
} from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

/* eslint-disable */
export default function setupMiddlewares(dir: string, app: Application, baseRoute: string = "") {
    const files = fs.readdirSync(dir, {
        withFileTypes: true
    });

    files.forEach((file) => {
        const filePath = path.join(dir, file.name);
        if (file.isDirectory()) return setupMiddlewares(filePath, app, path.join(baseRoute, file.name));

        const middleware = require(filePath).default;

        app.use(middleware);
    });
    const viteAppProxyMiddleware = createProxyMiddleware({
        target: "http://localhost:6009",
        changeOrigin: true,
    });

    app.use((req, res, next) => {
        if (req.path.startsWith("/api")) return next();
    
        viteAppProxyMiddleware(req, res, next);
    });
};
/* eslint-enable */