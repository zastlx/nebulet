import path from "path";
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
// @ts-ignore
/* eslint-disable */
import intercom from "./managers/intercom.js";
/* eslint-enable */
import setupRoutes from "./utils/initRoutes.js";
import config from "./config.js";
import setupMiddlewares from "./utils/initMiddlewares.js";

const app = express();
const viteAppProxyMiddleware = createProxyMiddleware({
    target: "http://localhost:6009",
    changeOrigin: true,
});

app.set("trust proxy", 1);

app.use((req, res, next) => {
    if (req.path.startsWith("/api")) return next();

    viteAppProxyMiddleware(req, res, next);
});

setupMiddlewares(path.join(__dirname, "/middlewares"), app);
setupRoutes(path.join(__dirname, "/endpoints"), app);
app.listen(config.server.port);