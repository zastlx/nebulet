"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
/* eslint-disable */
function setupMiddlewares(dir, app, baseRoute = "") {
    const files = fs_1.default.readdirSync(dir, {
        withFileTypes: true
    });
    files.forEach((file) => {
        const filePath = path_1.default.join(dir, file.name);
        if (file.isDirectory())
            return setupMiddlewares(filePath, app, path_1.default.join(baseRoute, file.name));
        const middleware = require(filePath).default;
        app.use(middleware);
    });
    const viteAppProxyMiddleware = (0, http_proxy_middleware_1.createProxyMiddleware)({
        target: "http://localhost:6009",
        changeOrigin: true,
    });
    app.use((req, res, next) => {
        if (req.path.startsWith("/api"))
            return next();
        viteAppProxyMiddleware(req, res, next);
    });
}
exports.default = setupMiddlewares;
;
/* eslint-enable */ 
